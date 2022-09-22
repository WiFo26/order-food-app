import { AvailableMeals } from '../Meal/AvailableMeals'
import { MealSummary } from '../Meal/MealSummary'
import { Header } from '../UI/Header'
export const Layout = () => {
  return (
    <div className=' h-screen bg-zinc-700'>
      <Header />
      <main className='absolute inset-x-0 top-20 bottom-0 grid place-items-center'>
        <MealSummary />
        <AvailableMeals />
      </main>
    </div>
  )
}
