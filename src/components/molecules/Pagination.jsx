'use client';
import { useSelector } from 'react-redux';
import usePagination from '../../hooks/usePagination';

const Pagination = ({ num, data }) => {
  const currentPage = useSelector(
    (state) => state.pagination.currentPage
  );

  const pagination = usePagination(num, data);

  return (
    <div className=''>
      <button
        disabled={currentPage === 1}
        className=''
        onClick={pagination.handleClickPrev}
      >
        Anterior
      </button>

      {pagination.pages.map((page) => (
        <button
          key={page}
          onClick={pagination.handleClick}
          value={page}
          className=''
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === pagination.totalPages}
        className=''
        onClick={pagination.handleClickNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
