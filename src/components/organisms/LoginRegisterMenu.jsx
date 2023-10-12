import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function LoginRegisterMenu({ login, setShowLoginMenu }) {
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

  return (
    <div className='fixed top-0 -left-28 h-full w-full'>
      <div className='w-fit h-fit fixed top-0 left-0 z-10'>
        <div
        // className={style.container}
        >
          <div signingin={signIn}>
            <form id='form'>
              <h1>Registrarse</h1>
              <input
                type='text'
                placeholder='Nombre'
                name='firstName'
                onChange={handleSignUpChange}
              />

              <div
              //   className={style.errors}
              >
                <p>{errors.firstName}</p>
              </div>
              <input
                type='text'
                placeholder='Apellido'
                name='lastName'
                onChange={handleSignUpChange}
              />
              <div
              //   className={style.errors}
              >
                <p>{errors.lastName}</p>
              </div>
              <input
                type='number'
                placeholder='Edad'
                name='age'
                onChange={handleSignUpChange}
              />
              <div
              //   className={style.errors}
              >
                <p>{errors.age}</p>
              </div>
              <input
                type='text'
                placeholder='Usuario'
                name='username'
                onChange={handleSignUpChange}
              />
              <div
              //   className={style.errors}
              ></div>
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleSignUpChange}
              />
              <div
              //   className={style.errors}
              >
                <p>{errors.email}</p>
              </div>
              <input
                type='password'
                placeholder='contraseña'
                name='password'
                onChange={handleSignUpChange}
              />
              <div
              //   className={style.errors}
              >
                <p>{errors.password}</p>
              </div>
              <select
                onChange={handleSignUpChange}
                name='gender'
                defaultValue={''}
              >
                <option
                  disabled
                  value=''
                >
                  Género
                </option>
                <option value='Masculino'>Masculino</option>
                <option value='Femenino'>Femenino</option>
                <option value='Otro'>Otro</option>
              </select>

              <button
                onClick={handleRegisterSubmit}
                // className={style.sendbutton}
                disabled={buttonDisabled()}
              >
                Registrarse
              </button>
            </form>
          </div>
          <div signingin={signIn}>
            <form
              //   onSubmit={handleSubmit}
              id='form'
            >
              <h1>Iniciar Sesión</h1>
              <input
                type='email'
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
              <div
              //   className={style.errors}
              >
                <p>{errors.email}</p>
              </div>
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
              />
              <div
              //   className={style.errors}
              ></div>
              <Link href='/resetpassword'>
                ¿Olvidaste tu contraseña?
              </Link>

              <button
              //   className={style.sendbutton}
              >
                Inicia Sesión
              </button>
            </form>
          </div>
          <div signingin={signIn}>
            <div signingin={signIn}>
              <div signingin={signIn}>
                <h1>¡Bienvenido!</h1>
                <p>¡Inicia sesión ahora para acceder a Auxie!</p>
                <button
                  onClick={() => toggle(true)}

                  //   className={style.sendbutton}
                >
                  Inicia Sesión
                </button>
              </div>
              <div signingin={signIn}>
                <h1>¡Bienvenido!</h1>
                <p>Completa el formulario para crear tu cuenta</p>
                <button
                  //   className={style.sendbutton}
                  onClick={() => toggle(false)}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button
          // className={style.googlebutton}
          // onClick={signInGoogle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'
              viewBox='0 0 256 262'
              width='20'
              height='25'
            >
              <path
                fill='#4285F4'
                d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
              ></path>
              <path
                fill='#34A853'
                d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
              ></path>
              <path
                fill='#FBBC05'
                d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
              ></path>
              <path
                fill='#EB4335'
                d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
              ></path>
            </svg>
            {''}
            <p>Continúa con Google</p>
          </button>
        </center>
      </div>
      <div
        className='fixed inset-0 bg-black opacity-20 h-screen w-screen z-0'
        onClick={() => setShowLoginMenu(false)}
      />
    </div>
  );
}

export default LoginRegisterMenu;
