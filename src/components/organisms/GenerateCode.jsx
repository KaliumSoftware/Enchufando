import { useState, useEffect } from 'react';
import useValidation from '@/hooks/useValidation';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const GenerateCode = ({ setShowDiscountMenu }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const [codeForm, setCodeForm] = useState({
    discount: ''
  });
  const [errors, setErrors] = useState({
    discount: ''
  });
  const [showCode, setShowCode] = useState(false);

  const { discountValidation } = useValidation();

  useEffect(() => {
    const createCode = async () => {
      try {
        const { data } = await axios.post(
          `${apiUrl}/codes?userId=${loggedUser.id}`,
          codeForm
        );

        if (data.code) {
          setShowCode(data.code);
        }
      } catch (error) {
        setShowCode(false);

        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: error.response.data.message
        });
      }
    };

    if (errors.discount.length === 0 && codeForm.discount.length > 0) {
      createCode();
    }
  }, [errors]);

  const validate = (event) => {
    event.preventDefault();

    setErrors({ ...errors, ...discountValidation(codeForm) });
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setCodeForm({
      ...codeForm,
      discount: value
    });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center h-full w-full z-50'>
      <div className='fixed mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 z-20'>
        <div className='mx-auto bg-white z-10 rounded-2xl py-16 px-32 w-[60vw] h-[50vh]'>
          {showCode ? (
            <div>
              <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
                El código de descuento es:
              </p>
              <span className='mx-auto mt-4 max-w-md text-center block font-bold text-6xl'>
                {showCode}
              </span>
            </div>
          ) : (
            <>
              <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
                Generar código de descuento
              </h1>
              <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
                Para registro de usuarios
              </p>
              <form
                name='discountForm'
                id='discountForm'
                className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
                onSubmit={validate}
              >
                <div className='flex items-center justify-evenly w-full'>
                  <div>
                    <label
                      htmlFor='discount'
                      className='sr-only'
                    >
                      Descuento (%)
                    </label>

                    <div className='relative'>
                      <input
                        id='discount'
                        className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                          errors.discount
                            ? 'border-red-600 border'
                            : 'border-gray-200 border'
                        }`}
                        placeholder='Descuento (%)'
                        name='discount'
                        onChange={handleChange}
                        value={codeForm.discount}
                      />

                      <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-percentage h-4 w-4 text-gray-400'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          strokeWidth='2'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path
                            stroke='none'
                            d='M0 0h24v24H0z'
                            fill='none'
                          ></path>
                          <path d='M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
                          <path d='M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
                          <path d='M6 18l12 -12'></path>
                        </svg>
                      </span>
                    </div>

                    {/* ERRORS */}
                    <div>
                      {errors.discount ? (
                        <p className='h-4 px-2 py-1 text-xs text-red-600'>
                          {errors.discount}
                        </p>
                      ) : (
                        <p className='h-4 px-2 py-1 text-xs text-red-600'></p>
                      )}
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-center'>
                  <button
                    type='submit'
                    className='block w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
                  >
                    Generar código
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <div
        className='fixed inset-0 bg-black opacity-20 h-screen w-screen z-0'
        onClick={() => setShowDiscountMenu(false)}
      />
    </div>
  );
};

export default GenerateCode;
