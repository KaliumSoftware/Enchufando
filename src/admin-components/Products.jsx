'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  filterProductsByName
} from '../redux/slices/productSlice';
import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';
import { Button } from '@nextui-org/react';
import Pagination from '../components/molecules/Pagination';
import usePagination from '@/hooks/usePagination';
import EditModal from './EditModal';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Products = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const allProds = useSelector((state) => state.product.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const allProducts = async () => {
      const { data } = await axios(`${apiUrl}/product`);
      dispatch(getAllProducts(data));
    };

    if (!allProds || !allProds.length) allProducts();
  }, []);
  const { currentPageData } = usePagination(6, allProds);

  const filterByName = (e) => {
    dispatch(filterProductsByName(e.target.value));
  };

  const handleClick = (buttonName) => {
    if (buttonName === 'edit') {
      setShowEdit(true);
      setShowDelete(false);
    } else {
      setShowEdit(false);
      setShowDelete(true);
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='relative mx-2'>
            <HiOutlineSearch
              fontSize={20}
              className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
            />
            <input
              type='text'
              placeholder='Buscar...'
              onChange={(e) => filterByName(e)}
              className='text-sm focus:outline-none text-black active:outline:none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11'
            />
          </div>

          <div className='my-3 p-2 flex items-center'>
            <div className='w-1/3 flex justify-start items-center'>
              <span>Producto</span>
            </div>
            <div className='w-1/3 flex justify-center items-center'>
              <span className='hidden sm:flex'>Tipo</span>
            </div>
            <div className='w-1/3 flex justify-center items-center'>
              <span className='hidden sm:flex'>Opciones</span>
            </div>
          </div>
          <ul>
            {currentPageData.map((product, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center'
              >
                <div className='w-1/3 flex justify-start items-center'>
                  <div className='rounded-lg'>
                    <Image
                      className='filter brightness-110 mix-blend-multiply'
                      width={75}
                      height={75}
                      alt={product?.name}
                      src={product?.image.secure_url}
                    />
                  </div>
                  <p className='pl-4'>{product?.name}</p>
                </div>

                <div className='w-1/3 flex justify-center items-center'>
                  <p>
                    {product.type.charAt(0).toUpperCase() +
                      product.type.slice(1).toLowerCase()}
                  </p>
                </div>

                <div className='w-1/3 flex justify-center items-center'>
                  <Button
                    className='mx-5'
                    color='primary'
                    variant='flat'
                    name='login'
                    onClick={() => handleClick('edit')}
                  >
                    Editar
                  </Button>

                  <Button
                    className='mx-5'
                    color='danger'
                    variant='flat'
                    name='login'
                    onClick={() => handleClick('delete')}
                  >
                    Eliminar
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-center py-4'>
            <Pagination
              num={6}
              data={allProds}
            />
          </div>
        </div>
      </div>
      {showEdit && (
        <EditModal
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
      {showDelete && <div>delete</div>}
    </div>
  );
};

export default Products;
