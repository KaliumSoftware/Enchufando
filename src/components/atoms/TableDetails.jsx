const TableDetails = ({ details }) => {
  const sizes = details?.map((item) => item.size);
  const prices = details?.map((item) => item.price);
  const bigPack = details?.map((item) => item.bigPack);
  const smallPack = details?.map((item) => item.smallPack);

  return (
    <div className='min-h-[270px] bg-white text-black overflow-y-scroll max-h-48 min-w-full'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 flex'>
          <tr className='w-1/4 px-2'>
            <th>Medida</th>
          </tr>
          <tr className='w-1/4 px-2'>
            <th>Precio</th>
          </tr>
          <tr className='w-1/4 px-2'>
            <th>Bolsón</th>
          </tr>
          <tr className='w-1/4 px-2'>
            <th>Bolsita</th>
          </tr>
        </thead>

        <div className='bg-white flex'>
          <div className='flex-col items-center w-1/4 px-2'>
            {sizes?.map((size) => (
              <div key={size}>
                <td>{size}</td>
              </div>
            ))}
          </div>
          <div className='flex-col items-center w-1/4 px-2'>
            {prices?.map((price) => (
              <div key={price}>
                <td>{price}</td>
              </div>
            ))}
          </div>
          <div className='flex-col items-center w-1/4 px-2'>
            {bigPack?.map((big) => (
              <div key={big}>
                <td>{big}</td>
              </div>
            ))}
          </div>
          <div className='flex-col items-center w-1/4 px-2'>
            {smallPack?.map((small) => (
              <div key={small}>
                <td>{small}</td>
              </div>
            ))}
          </div>
        </div>
      </table>
    </div>
  );
};

export default TableDetails;
