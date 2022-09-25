import { useReducer } from 'react'
import { CartContext } from './cart-context'

const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const updatedItems = state.items.concat(action.item)
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    default:
      throw new Error()
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)

  const addItemHandler = (item) => {
    dispatch({ type: 'add', item })
  }
  const deleteItemHandler = (id) => {}

  const defaultValue = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler
  }
  return (
    <CartContext.Provider value={defaultValue}>
      {children}
    </CartContext.Provider>
  )
}
