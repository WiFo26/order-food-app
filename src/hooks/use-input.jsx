import { useState } from 'react'

export const useInput = (validate) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const hasError = !validate(value) && touched

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleTouched = () => {
    setTouched(true)
  }

  const reset = () => {
    setValue('')
    setTouched(false)
  }
  return {
    value,
    handleChange,
    hasError,
    handleTouched,
    reset
  }
}
