"use client"
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function BlogsList() {
   
  const [blogs, setBlogs] = useState([])



useEffect (() => {
  const fetchBlogs = async () => {
    try {
      const {data} = await axios.get("/server/controller/getAllBlogs")
      setBlogs(data.blog)
      
    } catch (error) {
      console.log("Error", error)
    };
  } 
  fetchBlogs(); 
}, [])


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
 }


   return (
   <div className='p-10 lg:px-60'>
    <h2 className='text-2xl mb-5'>Recent Blogs</h2>
    <ul className="flex flex-col gap-4">
      {blogs.map((blog, index) =>
      <li key={index} className="border border-zinc-700 rounded-lg p-5 flex flex-col gap-2 lg:flex-row">
        <img src={blog.coverPhoto} alt={`${blog.title} cover photo`} className="rounded-md shadow-sm shadow-purple-950 w-fit h-fit lg:w-40"/>
        
        <div className='flex flex-col gap-4'>
        <div className="py-2 flex flex-col gap-2">       
        <h2 className="font-medium">{blog.title}</h2>
        <p className="font-light text-sm font-mono">{blog.author.name}</p>
        <p className="font-light text-sm font-mono">{truncateText(blog.content, 150)}</p>

        </div>

        <div className="flex flex-col lg:flex-row text-sm gap-5">
          <p className="px-2">Tags</p>
          
          {blog.tags.map((tag, tagindex) => 
          <div key={tagindex}>
            
            <span className="bg-purple-700 p-2 rounded-full">{tag}</span>
          </div>
          )}
          </div>
          </div>
      </li>)}
    </ul>
    </div>
   )
}






