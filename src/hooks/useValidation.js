const useValidation = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const spaceBetweenWordsRegex = /^.*\s+.*$/;
  const notNumbersRegex = /^[^\d]+$/;
  const numbersAndLettersRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const onlyNumbersRegex = /^[0-9]+$/;

  const loginValidation = (login) => {
    const errors = {};

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

  const discountValidation = (codeForm) => {
    const errors = {};

    if (codeForm.discount.trim().length === 0) {
      errors.discount = 'Ingrese un descuento';
    } else if (!Number(codeForm.discount)) {
      errors.discount = 'Ingrese solo números';
    } else if (Number(codeForm.discount) > 99 || Number(codeForm.discount) < 0) {
      errors.discount = 'Ingrese un número entre 0 y 99';
    } else {
      errors.discount = '';
    }

    return errors;
  };

  const contactUsValidation = (contactUsForm) => {
    const errors = {};

    // name validation
    if (contactUsForm.name.trim().length === 0) {
      errors.name = 'Ingrese su nombre';
    } else if (!notNumbersRegex.test(contactUsForm.name)) {
      errors.name = 'El nombre no puede contener números';
    } else {
      errors.name = '';
    }

    // email validation
    if (contactUsForm.email.trim().length === 0) {
      errors.email = 'Ingrese un email';
    } else if (!emailRegex.test(contactUsForm.email)) {
      errors.email = 'Ingrese un email válido';
    } else {
      errors.email = '';
    }

    // subject validation
    if (contactUsForm.subject.trim().length === 0) {
      errors.subject = 'Ingrese un asunto';
    } else {
      errors.subject = '';
    }

    // phone validation
    if (!onlyNumbersRegex.test(contactUsForm.phone)) {
      errors.phone = 'El teléfono debe contener sólo números';
    } else if (contactUsForm.phone.trim().length === 0) {
      errors.phone = 'Ingrese un teléfono';
    } else {
      errors.phone = '';
    }

    // message validation
    if (contactUsForm.message.trim().length === 0) {
      errors.message = 'Ingrese un mensaje';
    } else if (contactUsForm.message.trim().length < 50) {
      errors.message = 'El mensaje debe tener al menos 50 caracteres';
    } else {
      errors.message = '';
    }

    return errors;
  };

  const updateProductValidation = (productForm) => {
    const errors = {};

    return errors;
  };

  return {
    loginValidation,
    signUpValidation,
    discountValidation,
    contactUsValidation,
    updateProductValidation
  };
};

export default useValidation;
