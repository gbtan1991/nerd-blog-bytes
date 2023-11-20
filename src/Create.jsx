import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const addBlog = () => {
      // You can perform additional validation here
  
      // Display the added blog information (you might want to send this data to a server in a real application)
      alert(`Blog added!\n\nTitle: ${title}\nContent: ${content}`);
  
      // Clear the form fields
      setTitle('');
      setContent('');
    };
  
    return (
      <div className="blog-form">
        <h2>Add New Blog</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={handleContentChange}
              rows="4"
              required
            ></textarea>
          </div>
  
          <button type="button" onClick={addBlog}>
            Add Blog
          </button>
        </form>
      </div>
    );
  };


export default Create
