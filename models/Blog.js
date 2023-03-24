import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
