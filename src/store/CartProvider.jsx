import { useReducer } from 'react'
import { CartContext } from './cart-context'

const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  const draftItems = structuredClone(state.items)
  switch (action.type) {
    case 'add': {
      const existingItemIndex = draftItems.findIndex(item => item.id === action.item.id)
      const updatedTotalAmount = Number((state.totalAmount + action.item.price * action.item.amount).toFixed(2))
      if (existingItemIndex !== -1) {
        const existingItem = draftItems[existingItemIndex]
        existingItem.amount = existingItem.amount + action.item.amount
      } else {
        draftItems.push(action.item)
      }
      return {
        items: draftItems,
        totalAmount: updatedTotalAmount
      }
    }
    case 'delete': {
      const existingItemIndex = draftItems.findIndex(item => item.id === action.id)
      const existingItem = draftItems[existingItemIndex]
      const updatedTotalAmount = Number((state.totalAmount - existingItem.price).toFixed(2))
      if (existingItem.amount > 1) {
        existingItem.amount = existingItem.amount - 1
      } else {
        draftItems.splice(existingItemIndex, 1)
      }
      return {
        items: draftItems,
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
  const deleteItemHandler = (id) => {
    dispatch({ type: 'delete', id })
  }

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
