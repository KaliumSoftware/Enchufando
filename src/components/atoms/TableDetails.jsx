const TableDetails = ({ details }) => {
  const sizes = details?.map((item) => item.size);
  const prices = details?.map((item) => item.price);
  const bigPack = details?.map((item) => item.bigPack);
  const smallPack = details?.map((item) => item.smallPack);

  return (
    <div className='bg-white text-black overflow-y-scroll max-h-48 min-w-full'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 flex justify-between'>
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

        <tbody className='bg-white flex justify-between'>
          <div className='flex-col items-center'>
            {sizes?.map((size) => (
              <tr key={size}>
                <td>{size}</td>
              </tr>
            ))}
          </div>
          <div className='flex-col items-center'>
            {prices?.map((price) => (
              <tr key={price}>
                <td>{price}</td>
              </tr>
            ))}
          </div>
          <div>
            {bigPack?.map((big) => (
              <tr key={big}>
                <td>{big}</td>
              </tr>
            ))}
          </div>
          <div>
            {smallPack?.map((small) => (
              <tr key={small}>
                <td>{small}</td>
              </tr>
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
