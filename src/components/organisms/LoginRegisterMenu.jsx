import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function LoginRegisterMenu({
  setShowLoginMenu,
  signingin,
  setSigningin
}) {
  const [access, setAccess] = useState(false); //eslint-disable-line
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
    address: '',
    code: ''
  });
  const [errorsSignUp, setErrorsSignUp] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    code: ''
  });

  const loggedUser = useSelector((state) => state.loggedUser);

  const dispatch = useDispatch();
  const router = useRouter();
  //   const correo = 'info@enchufando.com';

  useEffect(() => {
    if (access === true) {
      if (loggedUser?.isAdmin) {
        router.push('/admin');
      } else {
        router.push('/store');
      }
    }
  }, [access]);

  const handleLoginChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  /*   const handleLogin = async (input) => {
    try {
      const { data } = await axios.post('/consumers/login', input);
      if (data) {
        if (data.isActive) {
          setAccess(true);
          dispatch(loggedUser(data));
          const form = document.getElementById('form');
          form.reset();
        } else {
          return Swal.fire({
            icon: 'error',
            title: 'Tu cuenta ha sido suspendida.',
            html: `<p>Para más información, contactate con <a style="color: black;" href="mailto:${correo}">${correo}</a>.</p>`
          });
        }
      }
    } catch (error) {
      console.error('error: ' + error.message);
      Swal.fire(error.message);
    }
  }; */

  /* const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input.email;
    const password = input.password;

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (credential) {
        handleLogin(input);
      }
      const form = document.getElementById('form');
      form.reset();
    } catch (error) {
      Swal.fire(error.message);
    }
  }; */

  //////para deshabilitar el boton si no esta lleno el formulario=>
  const buttonDisabled = () => {
    if (
      signUp.password.trim().length === 0 ||
      signUp.email.trim().length === 0 ||
      signUp.firstName.trim().length === 0 ||
      signUp.lastName.trim().length === 0 ||
      signUp.age.trim().length === 0 ||
      signUp.username.trim().length === 0 ||
      signUp.gender.trim().length === 0
    ) {
      return true;
    }

    for (let error in errors) {
      if (errors[error] !== '') {
        return true;
      }
    }

    return false;
  };

  ///SIGN UP///
  const handleSignUpChange = (event) => {
    setSignUp({
      ...signUp,
      [event.target.name]: event.target.value
    });
  };

  const handlePost = async (signUp) => {
    try {
      //   const response = await axios.post('/consumers', signUp);
      if (response) {
        // Reset the form only on successful response
        const form = document.getElementById('form');
        form.reset();
      }

      // Logear automaticamente
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    handlePost(data);
  };

  const handleToggle = () => {
    setSigningin(!signingin);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center h-full w-full'>
      <div className='fixed mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 z-20'>
        <div className='mx-auto bg-white z-10 rounded-2xl py-16 px-32 w-[75vw] h-[75vh]'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            {signingin ? 'Iniciar Sesión' : 'Registrarse'}
          </h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
            Bienvenido a Enchufando
          </p>

          <form
            action=''
            className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
          >
            <p className='text-center text-lg font-medium'>
              {signingin
                ? 'Ingresá con tu cuenta'
                : 'Registrate como usuario'}
            </p>

            <div className='flex items-center justify-evenly w-full'>
              {signingin ? (
                <div>
                  <label
                    for='email'
                    className='sr-only'
                  >
                    Email
                  </label>

                  <div className='relative'>
                    <input
                      type='email'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Email'
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
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <label
                    for='name'
                    className='sr-only'
                  >
                    Nombre completo
                  </label>

                  <div className='relative'>
                    <input
                      type='text'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Nombre completo'
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-user-filled h-4 w-4 text-gray-400'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path
                          stroke='none'
                          d='M0 0h24v24H0z'
                          fill='none'
                        ></path>
                        <path
                          d='M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z'
                          stroke-width='0'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z'
                          stroke-width='0'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              {!signingin && (
                <div>
                  <label
                    for='email'
                    className='sr-only'
                  >
                    Email
                  </label>

                  <div className='relative'>
                    <input
                      type='email'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Email'
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
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className='flex items-center justify-evenly w-full'>
              <div>
                <label
                  for='contraseña'
                  className='sr-only'
                >
                  Contraseña
                </label>

                <div className='relative'>
                  <input
                    type='password'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    placeholder='Contraseña'
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
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {!signingin && (
                <div>
                  <label
                    for='contraseña'
                    className='sr-only'
                  >
                    Repetir contraseña
                  </label>

                  <div className='relative'>
                    <input
                      type='password'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Repetir contraseña'
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
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className='flex items-center justify-evenly w-full'>
              {!signingin && (
                <div>
                  <label
                    for='address'
                    className='sr-only'
                  >
                    Dirección
                  </label>

                  <div className='relative'>
                    <input
                      type='text'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Dirección'
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-map-pin h-4 w-4 text-gray-400'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path
                          stroke='none'
                          d='M0 0h24v24H0z'
                          fill='none'
                        ></path>
                        <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
                        <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              {!signingin && (
                <div>
                  <label
                    for='code'
                    className='sr-only'
                  >
                    Código
                  </label>

                  <div className='relative'>
                    <input
                      type='text'
                      className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder='Código'
                    />

                    <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-user-filled h-4 w-4 text-gray-400'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path
                          stroke='none'
                          d='M0 0h24v24H0z'
                          fill='none'
                        ></path>
                        <path
                          d='M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z'
                          stroke-width='0'
                          fill='currentColor'
                        ></path>
                        <path
                          d='M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z'
                          stroke-width='0'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              type='submit'
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
            >
              {signingin ? 'Ingresar' : 'Registrarse'}
            </button>

            <p className='text-center text-sm text-gray-500'>
              {signingin
                ? '¿No tenés cuenta? '
                : '¿Ya tenés cuenta? '}
              <p
                className='underline cursor-pointer'
                onClick={handleToggle}
              >
                {signingin ? 'Registrarse' : 'Ingresar'}
              </p>
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
}

export default LoginRegisterMenu;
