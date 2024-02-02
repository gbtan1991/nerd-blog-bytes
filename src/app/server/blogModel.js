// blogModel.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  author: {
    name: String,
    email: String,
    bio: String,
  },
  publishedDate: Date,
  tags: [String],
  content: String,
  comments: [
    {
      user: String,
      comment: String,
    },
  ],
  likes: Number,
  shares: Number,
  coverPhoto: String,
});

const Blog = mongoose.model('Blog2', blogSchema);

export default Blog;
