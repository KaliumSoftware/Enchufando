import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function LoginRegisterMenu({
  login,
  setShowLoginMenu,
  signingin,
  setSigningin
}) {
  const [signIn, toggle] = useState(login);
  const [access, setAccess] = useState(false); //eslint-disable-line
  const [input, setInput] = useState({
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

  useEffect(() => {
    console.log(signingin);
  }, []);

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

  const handleChange = (event) => {
    setInput({
      ...input,
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
        <div className='mx-auto max-w-lg bg-white z-10 rounded-2xl py-16 px-32'>
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
