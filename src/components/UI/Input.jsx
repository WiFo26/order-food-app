import warningIcon from '../../assets/Warning-icon.png'
export const Input = ({ id, label, type, value, handleChange, handleTouch, valid }) => {
  return (
    <>
      <label htmlFor={id} className='font-semibold'>{label}</label>
      <input onBlur={handleTouch} value={value} onChange={handleChange} type={type} id={id} className='w-3/5 rounded border-[1px] border-gray-300 py-[2px] px-2' />
      {valid && <p className='mb-2 flex items-center text-sm text-red-500'><img className='mr-1 h-[14px] w-[14px]' src={warningIcon} />Please, enter a valid {id}</p>}
    </>
  )
}
