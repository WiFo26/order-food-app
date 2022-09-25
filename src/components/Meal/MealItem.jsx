import { useState, useContext } from 'react'
import { CartContext } from '../../store/cart-context'

export const MealItem = ({ id, name, description, price }) => {
  const [amount, setAmount] = useState(1)
  const { addItem, items, totalAmount } = useContext(CartContext)

  const labelIdentifier = `amount-${id}`

  const submitHandler = (e) => {
    e.preventDefault()
    const item = {
      id,
      name,
      price,
      amount: parseInt(amount)
    }
    addItem(item)
    setAmount(1)
  }

  console.log(items, totalAmount)

  return (
    <li className='flex items-center justify-between border-b-2 border-b-slate-300 pb-3 pt-2'>
      <div>
        <h3 className='font-bold'>{name}</h3>
        <p className='my-[2px] text-sm italic'>{description}</p>
        <span className='font-bold text-amber-600'>${price}</span>
      </div>
      <form onSubmit={submitHandler} action='#' className='flex flex-col items-center justify-center'>
        <div className='mb-2'>
          <label htmlFor={labelIdentifier} className='mr-3 text-sm font-semibold'>Amount</label>
          <input type='number' onChange={(e) => setAmount(e.target.value)} value={amount} min={1} max={5} id={labelIdentifier} className='w-10 rounded border-2 border-solid text-sm' />
        </div>
        <button className='rounded-full bg-[#762f12] px-4 py-1 text-sm text-white'>+ Add</button>
      </form>
    </li>
  )
}
