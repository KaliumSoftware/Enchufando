import React from 'react';
import Image from 'next/image';

const OrderDetail = ({
  setDetail,
  products,
  discount,
  totalPrice
}) => {
  const priceTransform = (price) => {
    return price.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center h-full w-full z-30'>
      <div className='fixed mx-auto px-4 py-10 sm:px-6 lg:px-8 z-20 bg-white h-[75vh] w-[75vw] lg:w-[50vw] overflow-y-auto'>
        <h2 className='text-2xl font-bold text-center mb-3'>
          Detalle del pedido
        </h2>
        <div className='flex flex-col '>
          {products?.map((product) => (
            <div className='md:flex items-center py-8 border-t border-gray-300'>
              <div className='flex mx-5'>
                <Image
                  src={product.image?.secure_url}
                  width={100}
                  height={100}
                  alt={product.name}
                  className='md:w-full md:h-full object-center object-cover'
                />
              </div>
              <div className='md:pl-3 md:w-3/4 w-full'>
                <p className='text-xl font-bold md:px-4 pb-6 text-gray-800 md:pt-0 pt-4 h-12 leading-none'>
                  {product.name}
                </p>
                <div>
                  <p>Medida: {product.size}</p>
                </div>

                <div>
                  <p>
                    Empaque:{' '}
                    {product.pack === 'small'
                      ? product.smallPack
                      : product.bigPack}
                  </p>
                </div>

                <div>
                  <p>
                    Cantidad: {product.quantity} x{' '}
                    {product.pack === 'small'
                      ? product.smallPack
                      : product.bigPack}
                  </p>
                </div>
              </div>
              <div className='md:border-l border-gray-200 md:pl-10 w-full'>
                <p className='text-xl md:px-4 font-bold pb-6 leading-3 text-gray-800 md:pt-0 pt-4 h-12'>
                  Precio
                </p>
                <div>
                  <p>Unitario: {priceTransform(product.price)}</p>
                </div>

                <div>
                  <p>
                    Con Descuento:{' '}
                    {priceTransform(product.price * discount)}
                  </p>
                </div>

                <div>
                  <p>
                    Subtotal:{' '}
                    {priceTransform(
                      product.price *
                        discount *
                        product.quantity *
                        (product.pack === 'small'
                          ? product.smallPack
                          : product.bigPack)
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='border-t border-gray-200'>
          <p className='mr-8 py-5 font-bold float-right'>
            Total Final: {priceTransform(totalPrice)}
          </p>
        </div>
      </div>

      <div
        className='fixed inset-0 bg-black opacity-20 h-screen w-screen z-0'
        onClick={() => setDetail({ show: false })}
      />
    </div>
  );
};

export default OrderDetail;
