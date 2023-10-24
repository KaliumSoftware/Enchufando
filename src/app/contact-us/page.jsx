'use client';
import contactUs from './../../../assets/contact-us-2.jpg';
import Image from 'next/image';
import useContactUsForm from '@/hooks/useContactUsForm';

const ContactUs = () => {
  const { contactUsForm, errors, handleChange, validate } =
    useContactUsForm();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='z-0 w-full translate-y-0'>
        <div className='bg-black z-10 w-full h-[450px] lg:h-[650px] absolute top-0 opacity-70'></div>
        <Image
          src={contactUs}
          alt='Imagen de contacto'
          className='w-full h-[450px] lg:h-[650px] object-cover absolute top-0'
        />
      </div>

      <div className='z-10 mt-10 text-white'>
        <div className='m-8 mb-12'>
          <h2 className='mb-4 text-2xl lg:text-3xl font-bold text-center'>
            Envianos tu mensaje
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>
            ¿Tenés preguntas sobre tu pedido? ¡Contactanos!
          </p>

          <div className='mt-4'>
            <section className='bg-white border-1.5 border-gray-400 rounded-xl'>
              <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md lg:max-w-screen-xl lg:w-screen'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
                  Datos de cliente
                </h2>
                <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
                  Vamos a necesitar los siguientes datos para poder
                  contactarte y darte una respuesta mas eficiente
                </p>
                <form className='space-y-5 md:space-y-8 md:px-20'>
                  <div className='md:flex md:gap-5 space-y-5 md:space-y-0'>
                    <div className='md:w-[50%]'>
                      <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Nombre
                      </label>
                      <div>
                        <input
                          onChange={handleChange}
                          value={contactUsForm.name}
                          type='text'
                          id='name'
                          name='name'
                          className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${
                            errors.name
                              ? 'border-red-600 border'
                              : 'border-gray-200 border'
                          }`}
                          placeholder='¿Como podemos ayudar?'
                        />
                        {errors.name ? (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                            {errors.name}
                          </p>
                        ) : (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                        )}
                      </div>
                    </div>

                    <div className='md:w-[50%]'>
                      <label
                        htmlFor='email'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Email
                      </label>
                      <div>
                        <input
                          onChange={handleChange}
                          value={contactUsForm.email}
                          type='email'
                          id='email'
                          name='email'
                          className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${
                            errors.email
                              ? 'border-red-600 border'
                              : 'border-gray-200 border'
                          }`}
                          placeholder='email@gmail.com'
                          required
                        />
                        {errors.email ? (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                            {errors.email}
                          </p>
                        ) : (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='md:flex md:gap-5 space-y-5 md:space-y-0'>
                    <div className='md:w-[50%]'>
                      <label
                        htmlFor='subject'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Asunto
                      </label>
                      <div>
                        <input
                          onChange={handleChange}
                          value={contactUsForm.subject}
                          type='text'
                          id='subject'
                          name='subject'
                          className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${
                            errors.subject
                              ? 'border-red-600 border'
                              : 'border-gray-200 border'
                          }`}
                          placeholder='¿Como podemos ayudar?'
                          required
                        />
                        {errors.subject ? (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                            {errors.subject}
                          </p>
                        ) : (
                          <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                        )}
                      </div>
                    </div>

                    <div className='md:w-[50%]'>
                      <label
                        htmlFor='phone'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      >
                        Teléfono
                      </label>
                      <div>
                        <input
                          onChange={handleChange}
                          value={contactUsForm.phone}
                          type='text'
                          id='phone'
                          name='phone'
                          className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ${
                            errors.phone
                              ? 'border-red-600 border'
                              : 'border-gray-200 border'
                          }`}
                          placeholder='011 1234 5678'
                          required
                        />
                      </div>
                      {errors.phone ? (
                        <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                          {errors.phone}
                        </p>
                      ) : (
                        <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                      )}
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='message'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                      Mensaje
                    </label>
                    <textarea
                      onChange={handleChange}
                      value={contactUsForm.message}
                      name='message'
                      id='message'
                      rows='6'
                      className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                        errors.message
                          ? 'border-red-600 border'
                          : 'border-gray-200 border'
                      }`}
                      placeholder='Escribí tu mensaje'
                    ></textarea>
                    {errors.message ? (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'>
                        {errors.message}
                      </p>
                    ) : (
                      <p className='h-6 lg:h-4 px-2 py-1 text-xs text-red-600'></p>
                    )}
                  </div>
                  <button
                    onClick={validate}
                    type='submit'
                    className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>

        <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 text-center m-10'>
          ¿Donde encontrarnos?
        </h2>
        <div className='w-full h-full flex items-center justify-center my-10'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.4995462246221!2d-58.65764147350162!3d-34.452193959927634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca383526b6333%3A0x9ebee60b3ea8b875!2sEnchufando%20o%20plasticos%20copache!5e0!3m2!1ses-419!2sar!4v1698065957926!5m2!1ses-419!2sar'
            className='w-[90%] lg:w-[95%] h-[450px]'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
