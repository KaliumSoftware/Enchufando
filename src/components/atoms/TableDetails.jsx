const TableDetails = ({ details }) => {
  const sizes = details?.map((item) => item.size);
  const prices = details?.map((item) => item.price);
  const bigPack = details?.map((item) => item.bigPack);
  const smallPack = details?.map((item) => item.smallPack);

  return (
    <div className='bg-white text-black overflow-y-scroll'>
      <table className='w-full max-h-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 flex'>
          <tr className='bg-gray-50'>
            <th>Size</th>
          </tr>
          <tr className='bg-gray-50'>
            <th>Price</th>
          </tr>
          <tr className='bg-gray-50'>
            <th>Big pack</th>
          </tr>
          <tr>
            <th>Small pack</th>
          </tr>
        </thead>

        <tbody className='bg-white flex-col'>
          {sizes?.map((size) => (
            <tr key={size}>
              <td>{size}</td>
            </tr>
          ))}
          {prices?.map((price) => (
            <tr key={price}>
              <td>{price}</td>
            </tr>
          ))}
          {bigPack?.map((big) => (
            <tr key={big}>
              <td>{big}</td>
            </tr>
          ))}
          {smallPack?.map((small) => (
            <tr key={small}>
              <td>{small}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
