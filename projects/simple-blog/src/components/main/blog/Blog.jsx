import PropTypes from 'prop-types';
import Button from '../Button';

/* CSS */
import './Blog.css';

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <img src={blog.img_url} alt={blog.author} />
      <p>{blog.title}</p>
      <Button path={`/detail/${blog.id}`}>Read More</Button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
