import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '@/store/slices/blogSlice';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addBlog({ title, description, content }));
    setTitle('');
    setDescription('');
    setContent('');
  }

  function postNewBlog(payload) {
    console.log(payload);
    dispatch(addBlog(payload));
    setTitle('');
    setDescription('');
    setContent('');
  }

  return (
    <>
      <Layout title="Create Blog">
        <form className="create-blog-form" onSubmit={handleSubmit}>
          <h1 className="create-blog-form-heading">Create Blog</h1>
          <div className="create-blog-form-field">
            <label htmlFor="title" className="create-blog-form-title">
              Title
            </label>
            <textarea
              type="text"
              className="create-blog-form-input-title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="description" className="create-blog-form-title">
              Description
            </label>
            <textarea
              type="text"
              className="create-blog-form-input-description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="content" className="create-blog-form-title">
              Content
            </label>
            <textarea
              type="textarea"
              className="create-blog-form-input-content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" className="submit-button" />
          </div>
        </form>
      </Layout>
    </>
  );
}
