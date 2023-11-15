const Blogs = ({ blogs }) => {

  return (
    <div className="flex flex-row gap-5">
      {blogs.map((blog) => {
        return (
          <div
            key={blog.id}
            className="font-mono w-96 shadow-retro text-white bg-zinc-950 shadow-teal-500"
          >
            <img src={blog.imageUrl} alt={blog.imageAlt} className="w-96 h-72" />
            <div className="p-5">
              <h2 className="text-2xl text-teal-500">{blog.title}</h2>
              <p className="italic">{blog.author}</p>
              <p className="text-justify">{blog.content}</p>
              <p className="text-white hover:text-teal-500">Read More..</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
