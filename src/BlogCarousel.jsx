import Blogs from './Blogs.jsx';

const BlogCarousel = ({ blogs={blogs}, title, handleDelete }) => {
  

      return (
    <div>
      <div className="px-10 py-5">
      <h2 className="text-2xl font-mono ">{ title }</h2>
         <Blogs blogs={blogs} title={title} handleDelete={handleDelete} className/>


    </div>
    </div>
  )
}

export default BlogCarousel
