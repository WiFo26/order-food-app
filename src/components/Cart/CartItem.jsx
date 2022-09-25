import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'

export const CartItem = ({ item }) => {
  const { addItem, deleteItem } = useContext(CartContext)
  const incrementHandler = () => {
    addItem({
      ...item,
      amount: 1
    })
  }

  const decrementHandler = () => {
    deleteItem(item.id)
  }
  return (
    <li className='flex items-center justify-between border-b-2 border-red-900 py-3'>
      <div>
        <h2 className='mb-2 text-xl font-bold'>{item.name}</h2>
        <div className='flex items-center gap-3 font-semibold'>
          <span className='w-14 text-sm text-[#762f12]'>${item.price}</span>
          <p className=' rounded border-2 py-1 px-2 text-xs tracking-[2px]'>x{item.amount}</p>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <button onClick={decrementHandler} className='rounded border-[1px] border-[#762f12] px-3 text-[#762f12]'>-</button>
        <button onClick={incrementHandler} className='rounded border-[1px] border-[#762f12] px-3 text-[#762f12]'>+</button>
      </div>
    </li>
  )
}
