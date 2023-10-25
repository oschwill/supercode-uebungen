import PropTypes from 'prop-types';
import BeerListItems from './BeerListItems';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

/* CSS */
import './Pagination.css';

const Pagination = ({ itemsPerPage, beerData }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = beerData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(beerData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % beerData.length;
    setItemOffset(newOffset);

    // Jump to start
    document.getElementById('ark').scrollIntoView();
  };

  return (
    <>
      <BeerListItems beerData={currentItems} />
      <ReactPaginate
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        nextClassName={'item next '}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={2}
        previousClassName={'item previous'}
        previousLabel="< previous"
      />
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  beerData: PropTypes.array,
};

export default Pagination;
