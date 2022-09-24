export const MealItem = ({ name, description, price }) => {
  return (
    <li className='border-b-2 border-b-slate-300 pb-3 pt-2'>
      <h3 className='font-bold'>{name}</h3>
      <p className='my-[2px] text-sm italic'>{description}</p>
      <span className='font-bold text-amber-600'>${price}</span>
    </li>
  )
}
