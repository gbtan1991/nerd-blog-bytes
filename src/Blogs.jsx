import { useState } from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'Getting Started with React',
            author: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            date: '2023-01-01',
            imageUrl: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
          },
          {
            id: 2,
            title: 'CSS Best Practices',
            author: 'Jane Smith',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            date: '2023-02-15',
            imageUrl: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: 3,
            title: 'JavaScript Fundamentals',
            author: 'Bob Johnson',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
            date: '2023-03-10',
            imageUrl: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
  ]);
  return( 
      <div className='flex flex-row gap-5'>
        {blogs.map((blog) => (
            
            <div key={blog.id} className='font-mono w-96 shadow-retro text-white bg-zinc-950 shadow-teal-500'>
                <img src={blog.imageUrl} className='w-96 h-72'/>
                <div className='p-5'>
                <h2 className='text-2xl text-teal-500'>{blog.title}</h2>
                <p className='italic'>{blog.author}</p>
                <p className='text-justify'>{blog.content}</p>
                <p className='text-white hover:text-teal-500'>Read More..</p>
                </div>
            </div>
            
        ))}
      </div>
  
  )};

export default Blogs;
