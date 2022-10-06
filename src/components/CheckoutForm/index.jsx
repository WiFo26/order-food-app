import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

export const CheckoutForm = ({ toggleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form action='#' onSubmit={handleSubmit} className='flex flex-col'>
      <Input id='name' label='Your Name' type='text' />
      <Input id='street' label='Street' type='text' />
      <Input id='postalCode' label='Postal Code' type='text' />
      <Input id='city' label='City' type='text' />
      <div className='mt-4 flex items-center justify-end gap-2'>
        <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Cancel</Button>
        <Button bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Confirm</Button>
      </div>
    </form>
  )
}
