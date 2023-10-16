const useValidation = () => {
  const loginValidation = (login) => {
    const errors = {};

    const emailRegex =
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (login.email.trim().length === 0) {
      errors.email = 'Ingrese un email';
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
