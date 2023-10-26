const FilterStore = () => {
  return (
    <div className='w-1/4 pl-8 py-4'>
      <article className='flex gap-2'>
        <p>Ordenar por</p>
        <select
          name=''
          id=''
        >
          <option value=''>Mayor precio</option>
          <option value=''>Menor precio</option>
        </select>
      </article>
    </div>
  );
};

export default FilterStore;
