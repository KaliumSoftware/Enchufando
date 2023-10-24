import { useEffect, useState } from 'react';
import useValidation from '@/hooks/useValidation';

const useContactUsForm = () => {
  const [contactUsForm, setContactUsForm] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const { contactUsValidation } = useValidation();

  useEffect(() => {
    if (
      errors.name.length === 0 &&
      errors.email.length === 0 &&
      errors.subject.length === 0 &&
      errors.phone.length === 0 &&
      errors.message.length === 0 &&
      contactUsForm.name.length > 0 &&
      contactUsForm.email.length > 0 &&
      contactUsForm.subject.length > 0 &&
      contactUsForm.phone.length > 0 &&
      contactUsForm.message.length > 0
    ) {
      sendMail();
    }
  }, [errors]);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setContactUsForm({
      ...contactUsForm,
      [name]: value
    });
  };

  const sendMail = () => {
    console.log('Enviar mail');
  };

  const validate = (event) => {
    event.preventDefault();

    setErrors(contactUsValidation(contactUsForm));
  };

  return {
    contactUsForm,
    errors,
    handleChange,
    validate
  };
};

export default useContactUsForm;
