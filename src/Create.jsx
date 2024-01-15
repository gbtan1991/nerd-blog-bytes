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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-tea-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-600">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-tea-500"
            required
          ></textarea>
        </div>

        <button
          type="button"
          onClick={addBlog}
          className="bg-tea-500 text-white py-2 px-4 rounded-md hover:bg-tea-600 focus:outline-none focus:ring focus:border-tea-700"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};


export default Create
