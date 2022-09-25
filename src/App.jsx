import { useState } from 'react'
import { Cart } from './components/Cart/Cart'
import { Layout } from './components/Layout'
import { AvailableMeals } from './components/Meal/AvailableMeals'
import { MealSummary } from './components/Meal/MealSummary'
import { CartProvider } from './store/CartProvider'

function App () {
  const [isModalDisplayed, modalDisplayed] = useState(false)

  const toggleModalDisplayed = () => {
    modalDisplayed(isModalDisplayed => !isModalDisplayed)
  }

  return (
    <CartProvider>
      {isModalDisplayed && <Cart toggleModal={toggleModalDisplayed} />}
      <Layout toggleModal={toggleModalDisplayed}>
        <MealSummary />
        <AvailableMeals />
      </Layout>
    </CartProvider>
  )
}

export default App
