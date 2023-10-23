import PropTypes from 'prop-types';

import Header from '../components/header/Header';
import Detail from '../components/main/details/Detail';

const BlogDetail = ({ data }) => {
  return (
    <div className="wrapper">
      <Header />
      <Detail data={data} />
    </div>
  );
};

BlogDetail.propTypes = {
  data: PropTypes.object,
};

export default BlogDetail;
