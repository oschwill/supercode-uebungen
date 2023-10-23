import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Blog from '../components/main/blog/Blog';

/* CSS */
import './BlogList.css';

const BlogList = ({ blogData }) => {
  console.log(blogData);
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="blog-list">
          {blogData.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
};

BlogList.propTypes = {
  blogData: PropTypes.array,
};

export default BlogList;
