import React, { useState } from 'react';
import useValidation from '@/hooks/useValidation';
import { useDispatch } from 'react-redux';

const EditModal = ({ setShowEdit, product }) => {
  // id: "51ec44f0-f864-4086-9a38-610a21c12c4d"
  // name: "Codo HH a 45º"
  // type: "ROSCADO"
  // category: "Codo"
  // image: {public_id: 'products/oupjboripihspf85i5j0', secure_url: 'https://res.cloudinary.com/djbeg0zrq/image/upload/v1697824065/products/oupjboripihspf85i5j0.jpg'}
  // sales: 0
  // specifications: []
  // active: true
  // createdAt: "2023-11-08T21:49:27.573Z"
  // updatedAt: "2023-11-08T21:49:27.573Z"
  const [productForm, setProductForm] = useState({
    id: product.id,
    name: product.name,
    type: product.type,
    category: product.category,
    image: product.image,
    specifications: product.specifications
  });
  const [productErrors, setProductErrors] = useState({
    id: '',
    name: '',
    type: '',
    category: '',
    image: '',
    specifications: ''
  });

  const dispatch = useDispatch();
  const { updateProductValidation } = useValidation();

  useEffect(() => {
    const updateProduct = async () => {
      try {
        await axios.put(`${apiUrl}/product/${product.id}?userId=${userId}`, productForm);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: error.response.data.error
        });
      }
    };

    if (
      productErrors.name.length === 0 &&
      productErrors.email.length === 0 &&
      productErrors.password.length === 0 &&
      productErrors.repeatPassword.length === 0 &&
      productErrors.address.length === 0 &&
      productErrors.code.length === 0 &&
      productForm.name.length > 0 &&
      productForm.email.length > 0 &&
      productForm.password.length > 0 &&
      productForm.repeatPassword.length > 0 &&
      productForm.address.length > 0 &&
      productForm.code.length > 0
    ) {
      updateProduct();
    }
  }, [productErrors]);

  const handleProductChange = (event) => {
    const { name, value } = event.target;

    setProductForm({
      ...productForm,
      [name]: value
    });
  };

  const handleToggle = () => {
    setSigningin(!signingin);
  };

  const validate = (event, form) => {
    event.preventDefault();

    if (form === 'login') {
      const validatedErrors = updateProductValidation(productForm);

      setErrors({ ...errors, ...validatedErrors });
    } else if (form === 'product') {
      const validatedErrors = updateProductValidation(productForm);

      setProductErrors({ ...productErrors, ...validatedErrors });
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center h-full w-full z-30'>
      <div className='fixed mx-auto px-4 py-16 sm:px-6 lg:px-8 z-20'>
        <div className='mx-auto mt-14 md:mt-0 bg-white z-10 rounded-2xl py-6 md:py-16 md:pt-16 px-5 md:px-10 w-[85vw] md:w-[55vw] 2xl:w-[55vw] md:h-full'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            {signingin ? 'Iniciar Sesión' : 'Registrarse'}
          </h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
            Editar producto
          </p>

          <form
            name='loginRegisterForm'
            id='loginRegisterForm'
            action=''
            className='mb-0 mt-6 lg:space-y-4 rounded-lg p-4 shadow-lg'
            onSubmit={(event) => validate(event)}
          >
            <p className='text-center text-lg font-medium'>
              Completá los campos para modificar el producto
            </p>

            <div className='lg:flex justify-center gap-x-6 w-full'>
              {/* NAME INPUT */}
              <div>
                <label
                  htmlFor='name'
                  className='sr-only'
                >
                  Nombre completo
                </label>

                <div className='relative'>
                  <input
                    id='name'
                    type='text'
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      productErrors.name
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Nombre completo'
                    name='name'
                    onChange={handleProductChange}
                  />
                </div>

                {/* ERRORS */}
                <div>
                  {productErrors.name ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.name}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>

              {/* EMAIL INPUT */}
              <div>
                <label
                  htmlFor='email'
                  className='sr-only'
                >
                  Email
                </label>

                <div className='relative'>
                  <input
                    id='email'
                    type='text'
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      signingin
                        ? errors.email
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                        : productErrors.email
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Email'
                    name='email'
                    onChange={signingin ? handleLoginChange : handleProductChange}
                    value={signingin ? login.email : productForm.email}
                  />
                </div>

                {/* ERRORS */}
                <div>
                  {signingin ? (
                    errors.email ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errors.email}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )
                  ) : productErrors.email ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.email}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div className='lg:flex justify-center gap-x-6 w-full'>
              <div>
                <label
                  htmlFor='password'
                  className='sr-only'
                >
                  Contraseña
                </label>

                <div className='relative'>
                  <input
                    id='password'
                    type={showPassword.password ? 'text' : 'password'}
                    className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                      signingin
                        ? errors.password
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                        : productErrors.password
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Contraseña'
                    name='password'
                    onChange={signingin ? handleLoginChange : handleProductChange}
                    value={signingin ? login.password : productForm.password}
                  />
                </div>

                {/* PASSWORD ERRORS */}
                <div>
                  {signingin ? (
                    errors.password ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errors.password}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )
                  ) : productErrors.password ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {productErrors.password}
                    </p>
                  ) : (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                  )}
                </div>
              </div>

              {/* REPEAT PASSWORD INPUT */}
              {!signingin && (
                <div>
                  <label
                    htmlFor='repeatPassword'
                    className='sr-only'
                  >
                    Repetir contraseña
                  </label>

                  <div className='relative'>
                    <input
                      id='repeatPassword'
                      type={showPassword.repeatPassword ? 'text' : 'password'}
                      className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                        productErrors.repeatPassword
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Repetir contraseña'
                      name='repeatPassword'
                      onChange={handleProductChange}
                    />
                  </div>

                  {/* REPEAT PASSWORD ERRORS */}
                  <div>
                    {productErrors.repeatPassword ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {productErrors.repeatPassword}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ADDRESS INPUT */}
            <div className='lg:flex justify-center gap-x-6 w-full'>
              {!signingin && (
                <div>
                  <label
                    htmlFor='address'
                    className='sr-only'
                  >
                    Dirección
                  </label>

                  <div className='relative'>
                    <input
                      id='address'
                      type='text'
                      className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                        productErrors.address
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Dirección'
                      name='address'
                      onChange={handleProductChange}
                    />
                  </div>

                  {/* ADDRESS ERRORS */}
                  <div>
                    {productErrors.address ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {productErrors.address}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )}
                  </div>
                </div>
              )}

              {/* CODE INPUT */}
              {!signingin && (
                <div>
                  <label
                    htmlFor='code'
                    className='sr-only'
                  >
                    Código
                  </label>

                  <div className='relative'>
                    <input
                      id='code'
                      type='text'
                      className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                        productErrors.code
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Código'
                      name='code'
                      onChange={handleProductChange}
                    />
                  </div>

                  {/* CODE ERRORS */}
                  <div>
                    {productErrors.code ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {productErrors.code}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='block w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mb-3'
              >
                {signingin ? 'Ingresar' : 'Registrarse'}
              </button>
            </div>

            <p className='text-center text-sm text-gray-500'>
              {signingin ? '¿No tenés cuenta? ' : '¿Ya tenés cuenta? '}
              <span
                className='underline cursor-pointer'
                onClick={handleToggle}
              >
                {signingin ? 'Registrarse' : 'Ingresar'}
              </span>
            </p>
          </form>
        </div>
      </div>
      <div
        className='fixed inset-0 bg-black opacity-20 h-screen w-screen z-0'
        onClick={() => setShowEdit(false)}
      />
    </div>
  );
};

export default EditModal;
