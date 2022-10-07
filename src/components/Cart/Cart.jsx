import { useState, useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import { CheckoutForm } from '../CheckoutForm'
import { Button } from '../UI/Button'
import { Card } from '../UI/Card'
import { Modal } from '../UI/Modal'
import { CartItem } from './CartItem'

export const Cart = ({ toggleModal }) => {
  const { items, totalAmount } = useContext(CartContext)
  const [isCheckout, setCheckout] = useState(false)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const handleCheckout = () => {
    setCheckout(true)
  }

  const submitOrderHandler = async (deliveryDetails) => {
    setIsSubmiting(true)
    const createdOrder = {
      ...deliveryDetails,
      items
    }
    await fetch('https://order-food-app-56a2a-default-rtdb.firebaseio.com/delivery.json', { method: 'POST', body: JSON.stringify(createdOrder) })
    setIsSubmiting(false)
    setDidSubmit(true)
  }
  const buttonContent = () => {
    return (
      !isCheckout &&
        <div className='flex items-center justify-end gap-2'>
          <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Close</Button>
          <Button onClick={handleCheckout} bgColor='bg-[#762f12]' borderColor='border-[#762f12]' textColor='text-white'>Order</Button>
        </div>
    )
  }

  const content = (
    <>
      <ul>
        {items.map(item => {
          return <CartItem key={item.id} item={item} />
        })}
      </ul>
      <div className='my-2 flex items-center justify-between text-xl font-bold'>
        <h1>Total Amount</h1>
        <span>${totalAmount}</span>
      </div>
      {buttonContent()}
      {isCheckout && <CheckoutForm toggleModal={toggleModal} submitHandler={submitOrderHandler} />}
    </>
  )
  return (
    <Modal toggleModal={toggleModal}>
      <Card bgColor='bg-white'>
        {!isSubmiting && !didSubmit && content}
        {isSubmiting && !didSubmit && <p className='text-center'>Sending Order...</p>}
        {didSubmit &&
          <div className='flex flex-col items-center'>
            <p>Order Sent Succesfully</p>
            <Button onClick={toggleModal} borderColor='border-[#762f12]' textColor='text-[#762f12]'>Close</Button>
          </div>}
      </Card>
    </Modal>
  )
}
