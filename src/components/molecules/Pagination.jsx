import { useState } from 'react';
import { Pagination } from '@nextui-org/react';

export default function PaginationCustom({ data }) {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    pageNum.push(i);
  }

  const handleInputChange = (event) => {
    setInputPage(event.target.value);
  };

  const goToPage = () => {
    const parsedInput = parseInt(inputPage, 10);
    if (parsedInput >= 1 && parsedInput <= pageNum.length) {
      setCurrentPage(parsedInput);
      setInputPage('');
      scrollToTop();
    } else {
      alert('Debe ingresar un número entre 1 y ' + pageNum.length);
      setInputPage(currentPage);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <Pagination
      total={10}
      initialPage={1}
    />
  );
}
