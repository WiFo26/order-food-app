import { useState, useEffect } from 'react'
import { VITE_GET_ENDPOINT } from '../../config'
import { Card } from '../UI/Card'
import { MealItem } from './MealItem'

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch(VITE_GET_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const mealsFromApi = []
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            mealsFromApi.push({
              id: key,
              ...data[key]
            })
          }
        }
        setIsLoading(false)
        setMeals(mealsFromApi)
      })
      .catch(error => {
        setIsLoading(false)
        setError(`Something went wrong: ${error.message}`)
      })
  }, [])

  const content = meals.length > 0 &&
    (
      <ul>
        {meals.map(meal => {
          return (
            <MealItem key={meal.id} {...meal} />
          )
        })}
      </ul>
    )

  return (
    <div className='flex w-full justify-center'>
      <section className='mb-4 h-full w-2/3'>
        <Card bgColor='bg-white'>
          {content}
          {loading && <h1 className='animate-ping text-center text-2xl font-bold'>Loading...</h1>}
          {error && !meals.length && <h3 className='text-center text-2xl font-bold text-red-600'>{error}</h3>}
        </Card>
      </section>
    </div>
  )
}
