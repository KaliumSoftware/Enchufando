import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { setSpecificationsCart } from '@/redux/slices/cartSlice';

export default function Measure(props) {
  const { specifications, selectedSpec, localId } = props;
  const dispatch = useDispatch();

  const handleChange = (value) => {
    const selectedProduct = specifications?.find((spec) => spec.size === value);
    if (selectedProduct) {
      dispatch(
        setSpecificationsCart({
          selectedSpec: selectedProduct,
          localId
        })
      );
    }
  };
  return (
    <Select
      label='Medidas'
      onChange={handleChange}
      value={selectedSpec?.size}
    >
      {specifications?.map((spec) => (
        <Option
          key={spec.code}
          value={spec.size}
        >
          {spec.size}
        </Option>
      ))}
    </Select>
  );
}
