export const Input = ({ id, label, type }) => {
  return (
    <>
      <label htmlFor={id} className='font-semibold'>{label}</label>
      <input type={type} id={id} className='mb-1 w-3/5 rounded border-[1px] border-gray-300 py-[2px] px-2' />
    </>
  )
}
