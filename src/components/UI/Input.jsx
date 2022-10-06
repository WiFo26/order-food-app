export const Input = ({ id, label, type, value, handleChange }) => {
  return (
    <>
      <label htmlFor={id} className='font-semibold'>{label}</label>
      <input value={value} onChange={handleChange} type={type} id={id} className='mb-1 w-3/5 rounded border-[1px] border-gray-300 py-[2px] px-2' />
    </>
  )
}
