import React from 'react'

export default function AsidePirce() {
    return (
        <div className=' md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full'>
            <div className='flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto'>
                <div>
                    <p className='text-4xl font-black leading-9 text-gray-800'>
                        Resumen
                    </p>
                    <div className='flex items-center justify-between pt-16'>
                        <p className='text-base leading-none text-gray-800'>
                            Sub Total
                        </p>
                        <p className='text-base leading-none text-gray-800'>
                            $9,000
                        </p>
                    </div>
                    <div className='flex items-center justify-between pt-5'>
                        <p className='text-base leading-none text-gray-800'>
                            Descuento
                        </p>
                        <p className='text-base leading-none text-gray-800'>
                            $30
                        </p>
                    </div>
                    <div className='flex items-center justify-between pt-5'>
                        <p className='text-base leading-none text-gray-800'>
                            Impuesto
                        </p>
                        <p className='text-base leading-none text-gray-800'>
                            $35
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                        <p className='text-2xl leading-normal text-gray-800'>
                            Total Final
                        </p>
                        <p className='text-2xl font-bold leading-normal text-right text-gray-800'>
                            $10.000

                        </p>
                    </div>
                    <button
                        onClick={() => setShow(!show)}
                        className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}