import { Cart } from '../Cart/Cart'
import { AvailableMeals } from '../Meal/AvailableMeals'
import { MealSummary } from '../Meal/MealSummary'
import { Header } from '../UI/Header'
export const Layout = () => {
  return (
    <>
      <Cart />
      <div className='bg-zinc-700'>
        <Header />
        <main className='absolute top-20 grid w-full place-items-center gap-6'>
          <MealSummary />
          <AvailableMeals />
        </main>
      </div>
    </>
  )
}
