"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation"

const Option = ({slug}) => {
    const [showInput, setShowInput] = useState(false);

    function handleClick() {
        setShowInput(prevState => !prevState);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            {!showInput ? <Options clickFunc={handleClick} slug={slug}/> : <Input slug={slug} />}
        </div>
    );
}

const Options = ({clickFunc, slug})=>{
    const router = useRouter();
    
    return(
        <div className="flex gap-8 md:flex-row flex-col">
            <div onClick={clickFunc} className="border border-slate-300/20 px-6 py-16 cursor-pointer">
                Provide a title you want facts about 📚
            </div>
            <div onClick={()=>router.push(`/dashboard/${slug}/content`)} className="border border-slate-300/20 px-6 py-16 cursor-pointer">
                Get random facts 🎲
            </div>
        </div>
    )
}

const Input = ({slug})=>{
    const [title, setTitle] = useState("");
    const router = useRouter();

    const handleSubmit = ()=>{
        localStorage.setItem("title", title);
        router.push(`/dashboard/${slug}/content`)
    }
    return(
        <div className="w-[40%] flex gap-3">
            <input type="text" placeholder="Input a subject title" onChange={(e)=>setTitle(e.target.value)} value={title} className="w-full outline-none border-b border-slate-200/30 bg-background p-4"/>
            <Button onClick={handleSubmit} className="mt-4">Create 😸</Button>
        </div>
    )
}

export {Option}