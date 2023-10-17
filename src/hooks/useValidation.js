const useValidation = () => {
  const loginValidation = (login) => {
    const errors = {};

    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (login.email.trim().length === 0) {
      errors.email = 'Ingrese un email';
    } else if (!emailRegex.test(login.email)) {
      errors.email = 'Ingrese un email valido';
    } else {
      errors.email = '';
    }
    if (login.password.trim().length === 0) {
      errors.password = 'Ingrese su contraseña';
    }

    return errors;
  };

  const signUpValidation = (signUp) => {
    const errors = {};

    return errors;
  };

  return { loginValidation, signUpValidation };
};

export default useValidation;
