import { useInput } from '../../hooks/use-input'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

export const CheckoutForm = ({ toggleModal }) => {
  const { value: name, handleChange: changeNameHandler } = useInput()
  const { value: street, handleChange: changeStreetHandler } = useInput()
  const { value: postalCode, handleChange: changePostalCodeHandler } = useInput()
  const { value: city, handleChange: changeCityHandler } = useInput()

  const handleSubmit = (e) => {
    e.preventDefault()
    const checkoutOrder = {
      name,
      street,
      postalCode,
      city
    }
    console.log(checkoutOrder)
  }
  return (
    <form action='#' onSubmit={handleSubmit} className='flex flex-col'>
      <Input id='name' label='Your Name' type='text' value={name} handleChange={changeNameHandler} />
      <Input id='street' label='Street' type='text' value={street} handleChange={changeStreetHandler} />
      <Input id='postalCode' label='Postal Code' type='text' value={postalCode} handleChange={changePostalCodeHandler} />
      <Input id='city' label='City' type='text' value={city} handleChange={changeCityHandler} />
      <div className='mt-4 flex items-center justify-end gap-2'>
        <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Cancel</Button>
        <Button bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Confirm</Button>
      </div>
    </form>
  )
}
