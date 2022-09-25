export const CartItem = ({ name, price, amount }) => {
  return (
    <li className='flex items-center justify-between border-b-2 border-red-900 py-3'>
      <div>
        <h2 className='mb-2 text-xl font-bold'>{name}</h2>
        <div className='flex items-center gap-3 font-semibold'>
          <span className='w-14 text-sm text-[#762f12]'>${price}</span>
          <p className=' rounded border-2 py-1 px-2 text-xs tracking-[2px]'>x{amount}</p>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <button className='rounded border-[1px] border-[#762f12] px-3 text-[#762f12]'>-</button>
        <button className='rounded border-[1px] border-[#762f12] px-3 text-[#762f12]'>+</button>
      </div>
    </li>
  )
}
