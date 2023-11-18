'use client';
import { useEffect, useState } from 'react';

const TableDetails = ({ details, from, handleSetSpecs }) => {
  const codes = details?.map((item) => item.code);
  const sizes = details?.map((item) => item.size);
  const prices = details?.map((item) => item.price);
  const bigPack = details?.map((item) => item.bigPack);
  const smallPack = details?.map((item) => item.smallPack);
  const [inputs, setInputs] = useState({
    code: codes,
    size: sizes,
    price: prices,
    bigPack: bigPack,
    smallPack: smallPack,
    index: null
  });

  useEffect(() => {
    if (typeof handleSetSpecs === 'function') handleSetSpecs(inputs);
  }, [inputs]);

  const handleChange = (event, index) => {
    const { value, name } = event.target;
    const inputsCopy = inputs[name];
    inputsCopy[index] = value;
    setInputs({
      ...inputs,
      [name]: inputsCopy,
      index
    });
  };

  return (
    <div className='bg-white text-black max-h-48 min-w-full overflow-x-hidden'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-300 flex'>
          {from === 'EditProduct' && (
            <tr className='w-1/6 px-2'>
              <th>Código</th>
            </tr>
          )}
          <tr className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
            <th>Medida</th>
          </tr>
          <tr className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
            <th>Precio</th>
          </tr>
          <tr className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
            <th>Bolsón</th>
          </tr>
          <tr className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
            <th>Bolsita</th>
          </tr>
        </thead>

        <tbody className='flex flex-col'>
          {details.map((item, index) => (
            <tr
              className={`flex items-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}
              key={`detail${index}`}
            >
              {from === 'EditProduct' && (
                <td
                  className={`${from === 'EditProduct' ? 'w-1/6' : 'w-1/4'} ${
                    index % 2 === 0 ? 'bg-gray-100' : ''
                  } px-2`}
                >
                  <input
                    className={`w-full ${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                    name='code'
                    onChange={(e) => handleChange(e, index)}
                    value={inputs.code[index]}
                  />
                </td>
              )}
              <td className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
                {from === 'EditProduct' ? (
                  <input
                    className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                    name='size'
                    onChange={(e) => handleChange(e, index)}
                    value={inputs.size[index]}
                  />
                ) : (
                  <span>{item.size}</span>
                )}
              </td>
              <td className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
                {from === 'EditProduct' ? (
                  <input
                    className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                    name='price'
                    onChange={(e) => handleChange(e, index)}
                    value={inputs.price[index]}
                  />
                ) : (
                  <span>{item.price}</span>
                )}
              </td>
              <td className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
                {from === 'EditProduct' ? (
                  <input
                    className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                    name='bigPack'
                    onChange={(e) => handleChange(e, index)}
                    value={inputs.bigPack[index]}
                  />
                ) : (
                  <span>{item.bigPack}</span>
                )}
              </td>
              <td className={`${from === 'EditProduct' ? 'w-1/5' : 'w-1/4'} px-2`}>
                {from === 'EditProduct' ? (
                  <input
                    className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}
                    name='smallPack'
                    onChange={(e) => handleChange(e, index)}
                    value={inputs.smallPack[index]}
                  />
                ) : (
                  <span>{item.smallPack}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
