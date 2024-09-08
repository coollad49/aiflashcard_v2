'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {useParams} from "next/navigation"
import { fetchData, fetchImg } from "@/app/fetch/model";

const Content = () => {
    const [blogData, setBlogData] = useState({
        "title": "",
            "content": {
            "introduction": "",
            "explanation": "",
            "fun_facts": "",
            "conclusion": ""
            },
        "image_search_query": ""
    });
    const [imgUrl, setImgUrl] = useState("");
    const {slug} = useParams();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const title = localStorage.getItem("title");
        const blog = async () => {
            try {
                console.log("fetching blog data");
                
                // Fetch the blog data
                let Data;
                if(title){
                    Data = await fetchData(slug, title);
                }
                else{
                    Data = await fetchData(slug);
                }
                console.log(Data);
    
                // Ensure blog data is valid before continuing
                if (Data && Data.image_search_query) {
                    // Update blogData state
                    setBlogData(Data);
                    
                    // Fetch image based on the image_search_query
                    const img = await fetchImg(Data.image_search_query);
    
                    // Uncomment this to set the image URL
                    setImgUrl(img.photos[0].src.original);
                    console.log(imgUrl)
                    setLoading(false);
                }
    
                
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };
    
        blog();
    }, []);

    const renderFunFacts = (fun_facts) => {    
        // Check if fun_facts is an array or a string
        if (Array.isArray(fun_facts)) {
            // If it's an array, map over the array to render each fact
            return (
                <>
                    {fun_facts.map((fact, index) => (
                        <li key={index} className="text-lg text-green-100 p-4 rounded border">
                            {fact}
                        </li>
                    ))}
                </>
            );
        } else if (typeof fun_facts === "string") {
            // If it's a string, split it by bullet points (or other separators) and render it
            const factsArray = fun_facts.split("•").filter(fact => fact.trim() !== "");
            return (
                <ul>
                    {factsArray.map((fact, index) => (
                        <li key={index} className="text-lg text-green-100 p-4 rounded border">
                            {fact}
                        </li>
                    ))}
                </ul>
            );
        } else if (typeof fun_facts === "object") {
            // If it's an object (key-value pairs), loop through the object and render it
            return (
                <ul>
                    {Object.entries(fun_facts).map(([key, value], index) => (
                        <li key={index} className="text-lg">
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <p>No fun facts available</p>;
        }
    };
    
    
    
    if(loading){
        return(
            <div className="h-screen flex justify-center items-center">
                Loading ....
            </div>
        )
    }
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased py-8 relative  flex flex-col gap-5">
                <h1 className="text-3xl font-bold ">{blogData.title}</h1>
                <img src={imgUrl} width={800} height={500} className="rounded-lg"/>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold text-sky-200 p-4 rounded">{blogData.content.introduction}</p>
                    <p className="text-lg text-yellow-100 p-4 rounded">{blogData.content.explanation}</p>
                    {renderFunFacts(blogData.content.fun_facts)}
                    <p className="text-lg text-red-100 p-4 rounded">{blogData.content.conclusion}</p>
                </div>

            </div>
        </TracingBeam>
    ); 
    
}
 


export default Content;