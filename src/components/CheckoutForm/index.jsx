import { Button } from '../UI/Button'

export const CheckoutForm = ({ toggleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form action='#' onSubmit={handleSubmit} className='flex flex-col'>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' />
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' />
      <label htmlFor='postalCode'>Postal Code</label>
      <input type='text' id='postalCode' />
      <label htmlFor='city'>City</label>
      <input type='text' id='city' />
      <div className='flex items-center justify-end gap-2'>
        <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Close</Button>
        <Button bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Order</Button>
      </div>
    </form>
  )
}
