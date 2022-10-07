import { useInput } from '../../hooks/use-input'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

const emptyValidation = (value) => value.trim() !== ''
const postalCodeValidation = (value) => emptyValidation(value) && value.length === 5

export const CheckoutForm = ({ toggleModal }) => {
  const { value: name, handleChange: changeNameHandler, hasError: nameInputError, handleTouched: handleNameTouched } = useInput(emptyValidation)
  const { value: street, handleChange: changeStreetHandler, hasError: streetInputError, handleTouched: handleStreetTouched } = useInput(emptyValidation)
  const { value: postalCode, handleChange: changePostalCodeHandler, hasError: postalCodeInputError, handleTouched: handlePostalCodeTouched } = useInput(postalCodeValidation)
  const { value: city, handleChange: changeCityHandler, hasError: cityInputError, handleTouched: handleCityTouched } = useInput(emptyValidation)

  const formIsValid = !nameInputError && !streetInputError && !postalCodeInputError && !cityInputError
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formIsValid) {
      return
    }
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
      <Input id='name' label='Your Name' type='text' value={name} handleChange={changeNameHandler} valid={nameInputError} handleTouch={handleNameTouched} />
      <Input id='street' label='Street' type='text' value={street} handleChange={changeStreetHandler} valid={streetInputError} handleTouch={handleStreetTouched} />
      <Input id='postalCode' label='Postal Code' type='text' value={postalCode} handleChange={changePostalCodeHandler} valid={postalCodeInputError} handleTouch={handlePostalCodeTouched} />
      <Input id='city' label='City' type='text' value={city} handleChange={changeCityHandler} valid={cityInputError} handleTouch={handleCityTouched} />
      <div className='mt-4 flex items-center justify-end gap-2'>
        <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Cancel</Button>
        <Button bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Confirm</Button>
      </div>
    </form>
  )
}
