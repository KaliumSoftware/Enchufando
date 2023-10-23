import React from 'react'

export default function ButtonSendOrder({ totalFinal, allInCart }) {
    const sendOrder = () => {
        if (isNaN(totalFinal)) {
            alert('Hay productos incompletos, por favor seleccione todas las caracteristicas')
        } else {
            if (confirm('Seguro que quiere enviar este pedido?')) {
                const productsInOrder = allInCart.map((product) => {
                    return {
                        name: product.name,
                        image: product.image,
                        size: product.selectedSpec.size,
                        price: product.selectedSpec.price,
                        quantity: product.selectedSpec.quantity,
                        pack: product.selectedSpec.pack,
                        smallPack: product.selectedSpec.smallPack,
                        bigPack: product.selectedSpec.bigPack
                    }
                })
            } else {
                alert('Pedido no enviado')
            }

        }
    }

    return (
        <button
            onClick={() => sendOrder(totalFinal)}
            className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
        >
            Enviar Pedido
        </button>
    )
}
