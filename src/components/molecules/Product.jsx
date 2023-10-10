import React from 'react';

const Product = ({ name, image, specifications }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          className='rounded-t-lg'
          src={image.url}
          alt=''
        />
      </a>
      <div className='p-5 bg-gray-200'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white'>
            {name}
          </h5>
        </a>

        <div class='relative overflow-x-auto mb-5'>
          <table class='w-full text-sm text-left text-gray-400'>
            <thead class='text-xs uppercase bg-gray-300 text-gray-700'>
              <tr>
                <th
                  scope='col'
                  class='px-3 py-1'
                >
                  Medida
                </th>
                <th
                  scope='col'
                  class='px-3 py-1'
                >
                  Bolsita
                </th>
                <th
                  scope='col'
                  class='px-3 py-1'
                >
                  Bolsón
                </th>
                <th
                  scope='col'
                  class='px-3 py-1'
                >
                  Precio Unitario
                </th>
              </tr>
            </thead>
            <tbody>
              {specifications.length
                ? specifications.map((specification) => {
                    return (
                      <tr class='border-b bg-gray-400 border-gray-700 text-gray-700'>
                        <td class='px-3 py-1'>
                          {specification.size}
                        </td>
                        <td class='px-3 py-1'>
                          {specification.smallPack}
                        </td>
                        <td class='px-3 py-1'>
                          {specification.bigPack}
                        </td>
                        <td class='px-3 py-1'>
                          {specification.price}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>

        <a
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Agregar al Carrito
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Product;
