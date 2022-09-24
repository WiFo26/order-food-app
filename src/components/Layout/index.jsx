import { Cart } from '../Cart/Cart'
import { AvailableMeals } from '../Meal/AvailableMeals'
import { MealSummary } from '../Meal/MealSummary'
import { Header } from '../UI/Header'
export const Layout = () => {
  return (
    <div className='bg-zinc-700'>
      <Header />
      <main className='absolute top-20 grid w-full place-items-center gap-6'>
        <Cart />
        <MealSummary />
        <AvailableMeals />
      </main>
    </div>
  )
}
