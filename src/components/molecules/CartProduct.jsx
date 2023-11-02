import React from 'react';
import TooltipReusable from '../atoms/TooltipReusable';
import ButtonDelete from '../atoms/ButtonDelete';
import ButtonAdd from '../atoms/ButtonAdd';
import Quantity from '../atoms/Quantity';
import Check from '../atoms/Check';
import Measure from '../atoms/Measure';
import UnitPriceAndDiscount from '../atoms/UnitPriceAndDiscount';

export default function CartProduct(props) {
  const { name, image, specifications, id, localId, selectedSpec } =
    props;

  return (
    <div className='md:flex items-center py-8 mt-4 border-t border-gray-400'>
      <div className='w-1/4'>
        <img
          src={image?.secure_url}
          alt={name}
          className='w-full h-full object-center object-cover'
        />
      </div>
      <div className='md:pl-3 md:w-3/4 w-full'>
        <p className='text-xl pb-6 leading-3 text-gray-800 md:pt-0 pt-4'>
          {name}
        </p>

        <Measure
          selectedSpec={selectedSpec}
          localId={localId}
          specifications={specifications}
        />
        <div className='flex justify-around py-10'>
          <TooltipReusable
            text='Seleccione una medida'
            show={!selectedSpec?.size}
            color='default'
          >
            <div>
              <Check
                selectedSpec={selectedSpec}
                localId={localId}
                id={id}
              />
            </div>
          </TooltipReusable>

          <Quantity
            selectedSpec={selectedSpec}
            localId={localId}
            id={id}
          />
        </div>

        <UnitPriceAndDiscount
          selectedSpec={selectedSpec}
          localId={localId}
          id={id} />
        <div className='flex items-center justify-between pt-5 pr-6'>
          <div className='flex items-center'>
            <ButtonAdd props={props} />
            <ButtonDelete localId={localId} />
          </div>
        </div>
      </div>
    </div>
  );
}
