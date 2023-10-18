

const BlogsList = ({blogs,  title, handleDelete}) => {



    return (
    <div>
        <h1 className="text-3xl font-bold font-mono">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {blogs.map((blog) => (
            <div className="bg-white rounded-lg shadow-lg p-6">
                 
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
