import { useState } from 'react'
import { Cart } from './components/Cart/Cart'
import { Layout } from './components/Layout'
import { AvailableMeals } from './components/Meal/AvailableMeals'
import { MealSummary } from './components/Meal/MealSummary'

function App () {
  const [isModalDisplayed, modalDisplayed] = useState(false)

  const toggleModalDisplayed = () => {
    modalDisplayed(isModalDisplayed => !isModalDisplayed)
  }

  return (
    <>
      {isModalDisplayed && <Cart toggleModal={toggleModalDisplayed} />}
      <Layout toggleModal={toggleModalDisplayed}>
        <MealSummary />
        <AvailableMeals />
      </Layout>
    </>
  )
}

export default App
