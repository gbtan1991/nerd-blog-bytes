

const BlogsList = ({blogs,  title, handleDelete}) => {



    return (
    <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-mono">{title}</h1>
        <div className="flex flex-col gap-6 w-3/4">
        {blogs.map((blog) => (
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h3>{blog.id}</h3>
                <h2 className="text-xl font-bold font-mono">{blog.title}</h2>
                <p className="text-gray-700">{blog.body}</p>
                <p className="text-gray-700">{blog.author}</p>
                <button className="px-2 m-2 bg-red-300 text-white font-bold" 
                onClick={() => handleDelete(blog.id)}  >X</button>
                
               
            </div>
        ))}
        </div>

    </div>
  )
}

export default BlogsList
