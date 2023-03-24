import Blog from '@/components/Blog';
import { Layout } from '@/components/Layout';
import { useSelector } from 'react-redux';

export default function Blogs() {
  const blogs = useSelector((state) => state.blogs);
  return (
    <>
      <Layout>
        <h1>Explore blogs</h1>
        {blogs.map((blog) => (
          <Blog key={blog.title} blog={blog} />
        ))}
      </Layout>
    </>
  );
}
