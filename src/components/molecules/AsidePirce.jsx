import React from 'react'
import { useSelector } from 'react-redux'

export default function AsidePirce() {
    const allInCart = useSelector(state => state.cart.cartProducts)
    const userCode = useSelector(state => state.user.loggedUser.discount)

    const subTotal = allInCart.map((product) => {
        if (product.selectedSpec) {
            if (product.selectedSpec.pack === 'big') {
                const resultBig = product.selectedSpec.bigPack * product.selectedSpec.price * product.selectedSpec.quantity
                return resultBig
            } else {
                const resultSmall = product.selectedSpec.smallPack * product.selectedSpec.price * product.selectedSpec.quantity
                return resultSmall
            }

        }
    }).reduce((a, b) => a + b, 0)

    const totalFinal = subTotal * (userCode / 100)


    const sendOrder = () => {
        if (isNaN(totalFinal)) {
            alert('Hay productos incompletos, por favor seleccione todas las caracteristicas')
        } else {
            alert('Gracias por su compra')
        }
    }


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
                            ${subTotal}
                        </p>
                    </div>
                    <div className='flex items-center justify-between pt-5'>
                        <p className='text-base leading-none text-gray-800'>
                            Descuento
                        </p>
                        <p className='text-base leading-none text-gray-800'>
                            {userCode}%
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                        <p className='text-2xl leading-normal text-gray-800'>
                            Total Final
                        </p>
                        <p className='text-2xl font-bold leading-normal text-right text-gray-800'>
                            {isNaN(totalFinal) ? 0 : totalFinal.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 2 })}
                        </p>
                    </div>
                    <button
                        onClick={() => sendOrder()}
                        className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
                    >
                        Enviar Pedido
                    </button>
                </div>
            </div>
        </div>
    )
}
