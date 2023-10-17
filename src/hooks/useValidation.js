const useValidation = () => {
  const loginValidation = (login) => {
    const errors = {};

    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // email validation
    if (login.email.trim().length === 0) {
      errors.email = 'Ingrese un email';
    } else if (!emailRegex.test(login.email)) {
      errors.email = 'Ingrese un email valido';
    } else {
      errors.email = '';
    }

    // password validation
    if (login.password.trim().length === 0) {
      errors.password = 'Ingrese su contraseña';
    } else {
      errors.password = '';
    }

    return errors;
  };

  const signUpValidation = (signUp) => {
    const errors = {};

    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const spaceBetweenWordsRegex = /^.*\s+.*$/;
    const notNumbersRegex = /^[^\d]+$/;
    const numbersAndLettersRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    // name validation
    if (signUp.name.trim().length === 0) {
      errors.name = 'Ingrese su nombre completo';
    } else if (!spaceBetweenWordsRegex.test(signUp.name)) {
      errors.name = 'Separe nombre y apellido con un espacio';
    } else if (signUp.name.trim().length > 35) {
      errors.name = 'Máximo 35 caracteres';
    } else if (!notNumbersRegex.test(signUp.name)) {
      errors.name = 'No se permiten números';
    } else {
      errors.name = '';
    }

    // email validation
    if (signUp.email.trim().length === 0) {
      errors.email = 'Ingrese un email';
    } else if (!emailRegex.test(signUp.email)) {
      errors.email = 'Ingrese un email valido';
    } else {
      errors.email = '';
    }

    // password validation
    if (signUp.password.trim().length === 0) {
      errors.password = 'Ingrese su contraseña';
    } else {
      errors.password = '';
    }

    // repeatPassword validation
    if (signUp.repeatPassword.trim().length === 0) {
      errors.repeatPassword = 'Repita su contraseña';
    } else if (signUp.password !== signUp.repeatPassword) {
      errors.repeatPassword = 'Las contraseñas no coinciden';
    } else {
      errors.repeatPassword = '';
    }

    // address validation
    if (signUp.address.trim().length === 0) {
      errors.address = 'Ingrese su dirección';
    } else if (!spaceBetweenWordsRegex.test(signUp.address)) {
      errors.address = 'Separe calle y altura con un espacio';
    } else if (!numbersAndLettersRegex.test(signUp.address)) {
      errors.address = 'Ingrese calle y altura (Calle 1234)';
    } else {
      errors.address = '';
    }

    //code validation
    if (signUp.code.trim().length === 0) {
      errors.code = 'Ingrese su código de registro';
    } else if (signUp.code.trim().length > 6) {
      errors.code = 'Máximo 6 caracteres sin espacios';
    } else if (signUp.code.trim().length < 6) {
      errors.code = 'Mínimo 6 caracteres';
    } else {
      errors.code = '';
    }

    return errors;
  };

  return { loginValidation, signUpValidation };
};

export default useValidation;
