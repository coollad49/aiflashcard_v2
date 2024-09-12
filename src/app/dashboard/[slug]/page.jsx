"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Dice6 } from 'lucide-react';

const FactGeneration = ({params}) => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const slug = params.slug;

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("title", title);
    router.push(`/dashboard/${slug}/content`)
  }

  useEffect(()=>{
    localStorage.clear();
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800"></h1>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter any Title for specific Facts"
              className="text-slate-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
            />
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center"
          >
            <span>Get Facts</span>
          </button>
        </form>
        
        <div className="text-center">
          <span className="text-gray-500">or</span>
        </div>
        
        <button
          onClick={()=>router.push(`/dashboard/${slug}/content`)}
          className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          <Dice6 className="mr-2" />
          <span>Get Random Facts</span>
        </button>
      </div>
    </div>
  );
};

export default FactGeneration;