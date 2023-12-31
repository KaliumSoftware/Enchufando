import React from 'react';
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';
import { Checkbox } from '@material-tailwind/react';

export default function Check(props) {
  const { id, localId, selectedSpec } = props;
  const dispatch = useDispatch();
  const handleCheck = (event) => {
    if (event.target.name === 'one') {
      dispatch(
        setSpecificationsCart({
          selectedSpec: { ...selectedSpec, pack: 'small' },
          localId
        })
      );
    } else {
      dispatch(
        setSpecificationsCart({
          selectedSpec: { ...selectedSpec, pack: 'big' },
          localId
        })
      );
    }
  };
  return (
    <div className='flex '>
      <div className='flex items-center'>
        <label htmlFor={`${id}checkOne`}>
          {selectedSpec ? `x ${selectedSpec?.smallPack}` : 'Bolsita'}
        </label>
        <Checkbox
          id={`${id}checkOne`}
          name='one'
          disabled={Boolean(!selectedSpec?.size)}
          checked={selectedSpec?.pack === 'small'}
          onChange={handleCheck}
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor={`${id}checkTwo`}>
          {selectedSpec ? `x ${selectedSpec?.bigPack}` : 'Bolsón'}
        </label>

        <Checkbox
          id={`${id}checkTwo`}
          name='two'
          disabled={Boolean(!selectedSpec?.size)}
          checked={selectedSpec?.pack === 'big'}
          onChange={handleCheck}
        />
      </div>
    </div>
  );
}
