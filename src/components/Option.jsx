"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation"

const Option = ({slug}) => {
    const [showInput, setShowInput] = useState(false);

    function handleClick(slug) {
        setShowInput(prevState => !prevState);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            {!showInput ? <Options clickFunc={handleClick} slug={slug} /> : <Input />}
        </div>
    );
}

const Options = ({clickFunc, slug})=>{
    const router = useRouter();
    const handleClick = () => {
        localStorage.setItem('category', slug);
        router.push(`/dashboard/${slug}/content`)
    }
    return(
        <div className="flex gap-8 md:flex-row flex-col">
            <div onClick={clickFunc} className="border border-slate-300/20 px-6 py-16 cursor-pointer">
                Create flashcards from your title ✍️
            </div>
            <div onClick={handleClick} className="border border-slate-300/20 px-6 py-16 cursor-pointer">
                Let AI generate flashcards for you 🤖
            </div>
        </div>
    )
}

const Input = ()=>{
    return(
        <div className="w-[40%] flex gap-3">
            <input type="text" placeholder="Input a subject title" className="w-full outline-none border-b border-slate-200/30 bg-background p-4"/>
            <Button className="mt-4">Create 😸</Button>
        </div>
    )
}

export {Option}