'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import useValidation from '@/hooks/useValidation';
import axios from 'axios';
import { setLoggedUser } from '@/redux/slices/userSlice';
import Swal from 'sweetalert2';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const LoginRegisterMenu = ({
  setShowLoginMenu,
  signingin,
  setSigningin
}) => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    code: ''
  });
  const [errorsSignUp, setErrorsSignUp] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    code: ''
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { loginValidation, signUpValidation } = useValidation();
  //   const correo = 'info@enchufando.com';

  // LOGIN
  useEffect(() => {
    const loginUser = async () => {
      try {
        const { data } = await axios.post(
          `${apiUrl}/user/login`,
          login
        );

        if (data.access) {
          if (data.user.isAdmin) router.push('/admin');
          else router.push('/store');

          setShowLoginMenu(false);
          dispatch(setLoggedUser(data.user));
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: error.response.data.message
        });
      }
    };

    if (
      errors.email.length === 0 &&
      errors.password.length === 0 &&
      login.email.length > 0 &&
      login.password.length > 0
    ) {
      loginUser();
    }
  }, [errors]);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value
    });
  };

  const handleShowPassword = (inputName) => {
    if (inputName === 'password') {
      setShowPassword({
        ...showPassword,
        password: !showPassword.password
      });
    } else if (inputName === 'repeatPassword') {
      setShowPassword({
        ...showPassword,
        repeatPassword: !showPassword.repeatPassword
      });
    }
  };

  // SIGN UP
  useEffect(() => {
    const signUpUser = async () => {
      try {
        const { data } = await axios.post(`${apiUrl}/user`, signUp);

        if (data.message === 'Usuario creado con éxito') {
          if (data.user.isAdmin) router.push('/admin');
          else router.push('/store');

          setShowLoginMenu(false);
          dispatch(setLoggedUser(data.user));
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: error.response.data.error
        });
      }
    };

    if (
      errorsSignUp.name.length === 0 &&
      errorsSignUp.email.length === 0 &&
      errorsSignUp.password.length === 0 &&
      errorsSignUp.repeatPassword.length === 0 &&
      errorsSignUp.address.length === 0 &&
      errorsSignUp.code.length === 0 &&
      signUp.name.length > 0 &&
      signUp.email.length > 0 &&
      signUp.password.length > 0 &&
      signUp.repeatPassword.length > 0 &&
      signUp.address.length > 0 &&
      signUp.code.length > 0
    ) {
      signUpUser();
    }
  }, [errorsSignUp]);

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;

    setSignUp({
      ...signUp,
      [name]: value
    });
  };

  const handleToggle = () => {
    setSigningin(!signingin);
  };

  const validate = (event, form) => {
    event.preventDefault();

    if (form === 'login') {
      const validatedErrors = loginValidation(login);

      setErrors({ ...errors, ...validatedErrors });
    } else if (form === 'signUp') {
      const validatedErrors = signUpValidation(signUp);

      setErrorsSignUp({ ...errorsSignUp, ...validatedErrors });
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
            Bienvenido a Enchufando
          </p>

          <form
            name='loginRegisterForm'
            id='loginRegisterForm'
            action=''
            className='mb-0 mt-6 lg:space-y-4 rounded-lg p-4 shadow-lg'
            onSubmit={(event) =>
              signingin
                ? validate(event, 'login')
                : validate(event, 'signUp')
            }
          >
            <p className='text-center text-lg font-medium'>
              {signingin
                ? 'Ingresá con tu cuenta'
                : 'Registrate como usuario'}
            </p>

            <div className='lg:flex justify-center gap-x-6 w-full'>
              {/* NAME INPUT */}
              {!signingin && (
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
                        errorsSignUp.name
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Nombre completo'
                      name='name'
                      onChange={handleSignUpChange}
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-user-circle h-4 w-4 text-gray-400'
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
                        <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                        <path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
                        <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855'></path>
                      </svg>
                    </span>
                  </div>

                  {/* ERRORS */}
                  <div>
                    {errorsSignUp.name ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errorsSignUp.name}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )}
                  </div>
                </div>
              )}

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
                        : errorsSignUp.email
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Email'
                    name='email'
                    onChange={
                      signingin
                        ? handleLoginChange
                        : handleSignUpChange
                    }
                    value={signingin ? login.email : signUp.email}
                  />

                  <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  </span>
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
                  ) : errorsSignUp.email ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {errorsSignUp.email}
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
                        : errorsSignUp.password
                        ? 'border-red-600 border'
                        : 'border-gray-200 border'
                    }`}
                    placeholder='Contraseña'
                    name='password'
                    onChange={
                      signingin
                        ? handleLoginChange
                        : handleSignUpChange
                    }
                    value={
                      signingin ? login.password : signUp.password
                    }
                  />

                  <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-400 cursor-pointer'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      onClick={() => handleShowPassword('password')}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </span>
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
                  ) : errorsSignUp.password ? (
                    <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                      {errorsSignUp.password}
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
                      type={
                        showPassword.repeatPassword
                          ? 'text'
                          : 'password'
                      }
                      className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm ${
                        errorsSignUp.repeatPassword
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Repetir contraseña'
                      name='repeatPassword'
                      onChange={handleSignUpChange}
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 text-gray-400 cursor-pointer'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={() =>
                          handleShowPassword('repeatPassword')
                        }
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </span>
                  </div>

                  {/* REPEAT PASSWORD ERRORS */}
                  <div>
                    {errorsSignUp.repeatPassword ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errorsSignUp.repeatPassword}
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
                        errorsSignUp.address
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Dirección'
                      name='address'
                      onChange={handleSignUpChange}
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-map-pin h-4 w-4 text-gray-400'
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
                        />
                        <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                        <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
                      </svg>
                    </span>
                  </div>

                  {/* ADDRESS ERRORS */}
                  <div>
                    {errorsSignUp.address ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errorsSignUp.address}
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
                        errorsSignUp.code
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Código'
                      name='code'
                      onChange={handleSignUpChange}
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-pencil-discount h-4 w-4 text-gray-400'
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
                        />
                        <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
                        <path d='M13.5 6.5l4 4' />
                        <path d='M16 21l5 -5' />
                        <path d='M21 21v.01' />
                        <path d='M16 16v.01' />
                      </svg>
                    </span>
                  </div>

                  {/* CODE ERRORS */}
                  <div>
                    {errorsSignUp.code ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errorsSignUp.code}
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
              {signingin
                ? '¿No tenés cuenta? '
                : '¿Ya tenés cuenta? '}
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
        onClick={() => setShowLoginMenu(false)}
      />
    </div>
  );
};

export default LoginRegisterMenu;
