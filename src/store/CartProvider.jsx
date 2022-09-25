import { useReducer } from 'react'
import { CartContext } from './cart-context'

const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const filteredItem = state.items.filter(item => item.id === action.item.id)
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      if (filteredItem.length !== 0) {
        console.log('Enter to the filter logic')
        const updatedItems = state.items.map(item => {
          if (item.id === action.item.id) {
            return {
              ...item,
              amount: item.amount + action.item.amount
            }
          }
          return item
        })
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        }
      }
      const updatedItems = state.items.concat(action.item)
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
