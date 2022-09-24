export const MealItem = ({ id, name, description, price }) => {
  const labelIdentifier = `amount-${id}`
  return (
    <li className='flex items-center justify-between border-b-2 border-b-slate-300 pb-3 pt-2'>
      <div>
        <h3 className='font-bold'>{name}</h3>
        <p className='my-[2px] text-sm italic'>{description}</p>
        <span className='font-bold text-amber-600'>${price}</span>
      </div>
      <form action='#' className='flex flex-col items-center justify-center'>
        <div className='mb-2'>
          <label htmlFor={labelIdentifier} className='mr-3 text-sm font-semibold'>Amount</label>
          <input type='number' min={1} max={5} id={labelIdentifier} defaultValue={1} className='w-10 rounded border-2 border-solid text-sm' />
        </div>
        <button className='rounded-full bg-[#762f12] px-4 py-1 text-sm text-white'>+ Add</button>
      </form>
    </li>
  )
}
