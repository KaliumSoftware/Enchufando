import React from 'react';

const Measures = () => {
  const measures = [
    '2',
    '1 x 1/2',
    '1 x 1/4',
    '1 x 3/4',
    '1',
    '3/4',
    '1/2',
    '3/8',
    '2 x 1/2',
    '1/2 x 3/4',
    '50',
    '40',
    '30',
    '20'
  ];
  return (
    <>
      <fieldset>
        <legend className='text-sm font-semibold leading-6 text-gray-900'>
          Medida
        </legend>
        <div className='grid grid-cols-6 gap-4 items-center flex-center'>
          {measures.map((measure, index) => (
            <div
              key={index}
              className='relative flex gap-x-3'
            >
              <div className='flex h-6 items-center'>
                <input
                  id='comments'
                  name='comments'
                  type='radio'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
              </div>
              <div className='text-sm leading-6'>
                <label
                  htmlFor='comments'
                  className='font-medium text-gray-900'
                >
                  {measure}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default Measures;
