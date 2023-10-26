

const BlogsList = ({blogs}) => {



    return (
    <div className="flex flex-col items-center">
        
        <div className="flex flex-col gap-6 w-3/4">
        {blogs.map((blog) => (
            <div className="bg-white rounded-lg shadow-lg p-6" key={blog.id}>
                
                <h2 className="text-xl font-bold font-mono" key={blog.id}>{blog.title}</h2>
                <p className="text-gray-700">{blog.body}</p>
                <p className="text-gray-700">{blog.author}</p>
                <button className="px-2 m-2 bg-red-300 text-white font-bold" 
                >X</button>
                
               
            </div>
        ))}
        </div>

    </div>
  )
}

export default BlogsList
