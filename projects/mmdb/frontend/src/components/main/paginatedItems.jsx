import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from './MovieCard';

/* CSS*/
import styles from './PaginatedItems.module.css';

const PaginatedItems = ({ itemsPerPage, movies }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movies && movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies && movies.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <MovieCard data={currentItems} />
      <ReactPaginate
        activeClassName={`${styles.item} ${styles.active}`}
        breakClassName={`${styles.item}`}
        breakLabel={'...'}
        containerClassName={`${styles.pagination}`}
        disabledClassName={`${styles.disabled_page}`}
        nextClassName={`${styles.item} ${styles.next}`}
        nextLabel="NEXT >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageClassName={`${styles.item} ${styles.pagination_page}`}
        pageRangeDisplayed={2}
        previousClassName={`${styles.item} ${styles.previous}`}
        previousLabel="< PREVIOUS"
      />
    </>
  );
};

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number,
  movies: PropTypes.array,
};

export default PaginatedItems;
