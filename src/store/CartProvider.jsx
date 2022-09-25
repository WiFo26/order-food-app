import { CartContext } from './cart-context'

export const CartProvider = ({ children }) => {
  const addItemHandler = (item) => {}
  const deleteItemHandler = (id) => {}

  const defaultValue = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler
  }
  return (
    <CartContext.Provider value={defaultValue}>
      {children}
    </CartContext.Provider>
  )
}
