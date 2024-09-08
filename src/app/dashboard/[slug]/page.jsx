"use client"
import { useEffect, useState } from "react";
import { Option } from "@/components/Option";
import Blog from "@/components/Blog";

const Category = ({params}) => {
    
    const slug = params.slug;
    
    
    return (
        <>
            <Option slug={slug}/>
        </>
    );
};

export default Category;