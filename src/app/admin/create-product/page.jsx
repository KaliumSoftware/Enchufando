import { PhotoIcon } from '@heroicons/react/24/solid';
import Measures from '../../../components/molecules/Measures';

export default function CreateProduct() {
  return (
    <form className='flex flex-col items-center justify-center'>
      <div className='w-[80%] md:w-1/2'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='mt-4 text-center text-2xl font-semibold leading-7 text-gray-900'>
            Crear Productos
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='username'
                className='block text-lg font-medium leading-6 text-gray-900'
              >
                Nombre del Producto{' '}
                <span className='text-red-400'>*</span>
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='productName'
                    id='productName'
                    autoComplete='productName'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='Producto...'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block font-medium text-lg leading-6 text-gray-900'
              >
                Descripción del producto
              </label>
              <div className='mt-2'>
                <textarea
                  id='about'
                  placeholder='Producto utilizado para...'
                  name='about'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
              <p className='mt-3 text-sm leading-6 text-gray-600'>
                Describí el producto a ser publicado
              </p>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium lg:text-lg leading-6 text-gray-900'
              >
                Imagen del Producto
              </label>
              <div className='col-span-full'>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <PhotoIcon
                      className='mx-auto h-12 w-12 text-gray-300'
                      aria-hidden='true'
                    />
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span>Seleccionar imagen</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>o arrastra y solta</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>
                      PNG, JPG, GIF hasta 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 space-y-10'>
            <Measures />
            <fieldset>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                Push Notifications
              </legend>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                These are delivered via SMS to your mobile phone.
              </p>
              <div className='mt-6 space-y-6'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-everything'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='push-everything'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Everything
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-email'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='push-email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Same as email
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-nothing'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  );
}
