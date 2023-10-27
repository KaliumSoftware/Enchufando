const FilterStore = () => {
  const types = ['Roscado', 'Krona', 'Espiga'];
  const category = [
    'Acople',
    'Adaptador',
    'Brida',
    'Buje',
    'Canilla',
    'Codo',
    'Cruz',
    'Cupla',
    'Curva',
    'Enchufe',
    'Flexible',
    'Junta',
    'Montura',
    'Niple',
    'Rosca con tuerca',
    'Tapón',
    'Tapa',
    'Tee',
    'Unión',
    'Valvula'
  ];
  return (
    <div className='w-1/4 pl-8 py-4'>
      <article className='flex gap-2'>
        <p>Ordenar por</p>
        <select
          name=''
          id=''
        >
          {types.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </article>
      <article>
        <h3 className='mt-4 mb-2 text-xl'>Categorías</h3>
        <ul className='flex flex-col gap-1'>
          {category.map((item) => (
            <li
              className='w-fit cursor-pointer'
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default FilterStore;
