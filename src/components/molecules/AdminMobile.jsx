'use client';
import { useEffect, useState } from 'react';
import useValidation from '@/hooks/useValidation';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button
} from '@nextui-org/react';

const AdminMobile = () => {
  const router = useRouter();
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
        const { data } = await axios.post(`${apiUrl}/codes`, codeForm);

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

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = showCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    Swal.fire({
      icon: 'success',
      title: '¡Listo!',
      text: 'Código copiado al portapapeles'
    });
  };

  return (
    <div className='h-screen flex  justify-center items-center'>
      <div className='absolute top-12 left-12'>
        <Button onClick={() => router.push('/')}>Volver al Inicio</Button>
      </div>

      <Card className='max-w-[400px]'>
        <CardHeader className='flex gap-3'>
          {showCode ? (
            <>
              <h3 className='text-xl'>El código de descuento es: </h3>
            </>
          ) : (
            <h1 className='text-xl'>Generar Código de descuento</h1>
          )}
        </CardHeader>
        <Divider />
        <CardBody>
          {showCode ? (
            <span className='mx-auto mt-4 max-w-md text-center block font-bold text-6xl'>
              {showCode}
            </span>
          ) : (
            <form onSubmit={validate}>
              <div className='mb-4 '>
                <input
                  className='flex justify-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='discount'
                  type='text'
                  placeholder='Código de descuento'
                  name='discount'
                  value={codeForm.discount}
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </CardBody>
        <Divider />
        <CardFooter className='flex items-center justify-center'>
          {showCode ? (
            <Button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={copyToClipboard}
            >
              Copiar al portapapeles
            </Button>
          ) : (
            <div className='flex items-center justify-center'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Generar Código
              </button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminMobile;
