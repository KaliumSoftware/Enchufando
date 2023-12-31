import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/paginationSlice';
import { useEffect } from 'react';

const usePagination = (num, data) => {
  const currentPage = useSelector(
    (state) => state.pagination.currentPage
  );
  const dispatch = useDispatch();

  const cardsPerPage = num;
  let currentPageData = [];
  const totalPages = Math.ceil(data?.length / cardsPerPage);

  if (currentPage > totalPages) {
    dispatch(setCurrentPage(1));
  }

  const pages = Array.from(
    { length: totalPages },
    (ignored, index) => index + 1
  );

  const firstIndex = cardsPerPage * (currentPage - 1);
  const lastIndex = cardsPerPage * currentPage - 1;

  if (data?.length > 0) {
    currentPageData = data?.slice(firstIndex, lastIndex + 1);
  }

  const handleClick = (event) => {
    const { value } = event.target;
    dispatch(setCurrentPage(Number(value)));
  };

  const handleClickPrev = () => {
    if (currentPage !== 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const handleClickNext = () => {
    if (currentPage !== totalPages)
      dispatch(setCurrentPage(currentPage + 1));
  };

  return {
    currentPageData,
    pages,
    totalPages,
    handleClick,
    handleClickPrev,
    handleClickNext
  };
};

export default usePagination;
