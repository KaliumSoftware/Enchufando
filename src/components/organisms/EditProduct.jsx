import React, { useState, useEffect } from 'react';
import useValidation from '@/hooks/useValidation';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import TableDetails from '@/components/atoms/TableDetails';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const EditProduct = ({ setShowEdit, product }) => {
  const userId = useSelector((state) => state.user.loggedUser.id);
  // id: "51ec44f0-f864-4086-9a38-610a21c12c4d"
  // name: "Codo HH a 45º"
  // type: "ROSCADO"
  // category: "Codo"
  // image: {public_id: 'products/oupjboripihspf85i5j0', secure_url: 'https://res.cloudinary.com/djbeg0zrq/image/upload/v1697824065/products/oupjboripihspf85i5j0.jpg'}
  // sales: 0
  // specifications: [{},{}]
  // active: true
  // createdAt: "2023-11-08T21:49:27.573Z"
  // updatedAt: "2023-11-08T21:49:27.573Z"
  const [productForm, setProductForm] = useState({
    id: product.id,
    name: product.name,
    type: product.type,
    category: product.category,
    image: product.image,
    specifications: product.specifications
  });
  const [productErrors, setProductErrors] = useState({
    id: '',
    name: '',
    type: '',
    category: '',
    image: '',
    specifications: ''
  });
  const [showSpecs, setShowSpecs] = useState(false);

  const dispatch = useDispatch();
  const { updateProductValidation } = useValidation();

  useEffect(() => {
    const updateProduct = async () => {
      try {
        await axios.put(`${apiUrl}/product/${product.id}?userId=${userId}`, productForm);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: error.response.data.error
        });
      }
    };

    if (
      productErrors.name.length === 0 &&
      productErrors.type.length === 0 &&
      productErrors.category.length === 0 &&
      productErrors.specifications.length === 0 &&
      productForm.name.length > 0 &&
      productForm.type.length > 0 &&
      productForm.category.length > 0 &&
      productForm.specifications.length > 0
    ) {
      updateProduct();
    }
  }, [productErrors]);

  const handleProductChange = (event) => {
    const { name, value } = event.target;

    setProductForm({
      ...productForm,
      [name]: value
    });
  };

  const validate = (event) => {
    event.preventDefault();

    const validatedErrors = updateProductValidation(productForm);

    setProductErrors({ ...productErrors, ...validatedErrors });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center h-full w-full z-30'>
      <div className='fixed mx-auto px-4 py-16 sm:px-6 lg:px-8 z-20'>
        <div className='mx-auto mt-14 md:mt-0 bg-white z-10 rounded-2xl py-6 md:py-16 md:pt-16 px-5 md:px-10 w-[85vw] md:w-[55vw] 2xl:w-[55vw] md:h-full'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            Editar Producto
          </h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
            Los campos que modifiques van a ser actualizados en la base de datos
          </p>

          <form
            name='productForm'
            id='productForm'
            action=''
            className='mb-0 mt-6 lg:space-y-4 rounded-lg p-4 shadow-lg'
            onSubmit={(event) => validate(event)}
          >
            <p className='text-center text-lg font-medium'>
              Completá los campos para modificar el producto
            </p>

            <div className='lg:flex justify-center gap-x-6 w-full'>
              {/* NAME INPUT */}
              <div>
                <label htmlFor='name'>Nombre del producto</label>
                <div className='relative'>
                  <input
                    id='name'
                    type='text'
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      productErrors.name
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Nombre del producto'
                    name='name'
                    value={productForm.name}
                    onChange={handleProductChange}
                  />
                </div>
                {/* ERRORS */}
                <div>
                  {productErrors.name ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.name}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>

              {/* TYPE INPUT, cambiar por checkbox */}
              <div>
                <label htmlFor='type'>Tipo (ROSCADO, ESPIGA, KRONA)</label>

                <div className='relative'>
                  <input
                    id='type'
                    type='text'
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      productErrors.type
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Tipo'
                    name='type'
                    onChange={handleProductChange}
                    value={productForm.type}
                  />
                </div>

                {/* ERRORS */}
                <div>
                  {productErrors.type ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.type}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>
            </div>

            {/* category INPUT, cambiar por select*/}
            <div className='lg:flex justify-center gap-x-6 w-full'>
              <div>
                <label htmlFor='category'>Categoría</label>

                <div className='relative'>
                  <input
                    id='category'
                    type='text'
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      productErrors.category
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Tipo'
                    name='category'
                    onChange={handleProductChange}
                    value={productForm.category}
                  />
                </div>

                {/* ERRORS */}
                <div>
                  {productErrors.category ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.category}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>
            </div>

            {showSpecs && (
              <div>
                {showSpecs ? <TableDetails details={product.specifications} /> : null}
              </div>
            )}
            <div className='lg:flex justify-center gap-x-6 w-full'>
              <button
                onClick={() => setShowSpecs(!showSpecs)}
                className='w-40 inline-flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300'
              >
                {showSpecs ? 'Ocultar detalles' : 'Ver más detalles'}

                <svg
                  className='w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className='fixed inset-0 bg-black opacity-20 h-screen w-screen z-0'
        onClick={() => setShowEdit(false)}
      />
    </div>
  );
};

export default EditProduct;

/*
<div className='flex items-center justify-center'>
<button
  type='submit'
  className='block w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mb-3'
>
  {signingin ? 'Ingresar' : 'Registrarse'}
</button>
</div>

<p className='text-center text-sm text-gray-500'>
{signingin ? '¿No tenés cuenta? ' : '¿Ya tenés cuenta? '}
<span
  className='underline cursor-pointer'
  onClick={handleToggle}
>
  {signingin ? 'Registrarse' : 'Ingresar'}
</span>
</p> */
