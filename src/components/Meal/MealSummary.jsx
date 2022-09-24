import { Card } from '../UI/Card'

export const MealSummary = () => {
  return (
    <section className='mt-4 w-1/2 text-center'>
      <Card bgColor='bg-zinc-800' textColor='text-white'>
        <h2 className='mb-6 text-2xl font-semibold '>Delicious Food, Delivered to You</h2>
        <p className='mb-4'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p className='mb-4'>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </Card>
    </section>
  )
}
