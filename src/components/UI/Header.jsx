import mealHeaderImg from '../../assets/meals.jpg'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = ({ toggleModal }) => {
  return (
    <>
      <header className='flex h-20 items-center justify-between bg-red-900 text-white'>
        <h1 className='ml-24 text-3xl font-bold'>React Meals</h1>
        <HeaderCartButton toggleModal={toggleModal} />
      </header>
      <div className='h-72 overflow-hidden '>
        <img className='h-full min-w-[110%] -translate-y-28 -translate-x-8 -rotate-6 object-cover' src={mealHeaderImg} alt='A table with lots of food' />
      </div>
    </>
  )
}
