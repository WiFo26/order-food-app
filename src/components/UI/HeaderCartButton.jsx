import { useEffect, useContext, useState } from 'react'
import { CartContext } from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

export const HeaderCartButton = ({ toggleModal }) => {
  const [isButtonAnimated, animateButton] = useState(false)
  const { items } = useContext(CartContext)

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    animateButton(true)
    const timer = setTimeout(() => {
      animateButton(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  const numberOfItems = items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <button onClick={toggleModal} className={`mr-24 flex ${isButtonAnimated ? 'animate-bounce' : ''} items-center justify-around gap-1 rounded-full bg-[#4d1601] px-8 py-2 text-xs font-semibold text-white hover:bg-[#92320c]`}>
      <div className='h-4 w-4 text-white'>
        <CartIcon />
      </div>
      <span className='mr-2'>Your Cart</span>
      <span className='rounded-full bg-[#b94517] px-[0.65rem] py-[0.2rem]'>{numberOfItems}</span>
    </button>
  )
}
