'use client';
import { useSelector } from 'react-redux';
import usePagination from '../../hooks/usePagination';

const Pagination = ({ num, data }) => {
  const currentPage = useSelector(
    (state) => state.pagination.currentPage
  );

  const pagination = usePagination(num, data);

  const slicer = () => {
    if (pagination.pages.length < 4) {
      return { start: 0, end: pagination.pages.length };
    } else if (currentPage === 1 || currentPage === 2) {
      return { start: 0, end: 5 };
    } else if (
      currentPage === pagination.totalPages ||
      currentPage === pagination.totalPages - 1
    ) {
      return {
        start: pagination.totalPages - 5,
        end: pagination.totalPages
      };
    } else {
      return { start: currentPage - 3, end: currentPage + 2 };
    }
  };

  return (
    <div className='my-5 flex justify-center md:w-full'>
      <button
        disabled={currentPage === 1}
        className='m-1 p-2 flex items-center justify-center border rounded-xl w-8 bg-gray-500 hover:bg-blue-700 text-white font-bold'
        onClick={pagination.handleClickPrev}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path
            fill='#ffffff'
            d='m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z'
          />
        </svg>
      </button>

      {pagination.pages
        .map((page) => (
          <button
            key={page}
            onClick={pagination.handleClick}
            value={page}
            className={`m-1 p-2 flex items-center justify-center border rounded-xl w-8 ${
              currentPage == page ? 'bg-blue-700' : 'bg-gray-500'
            } hover:bg-blue-700 text-white`}
          >
            {page}
          </button>
        ))
        .slice(slicer().start, slicer().end)}

      <button
        disabled={currentPage === pagination.totalPages}
        className='m-1 p-2 flex items-center justify-center border rounded-xl w-8 bg-gray-500 hover:bg-blue-700 text-white font-bold'
        onClick={pagination.handleClickNext}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path
            fill='#ffffff'
            d='M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
