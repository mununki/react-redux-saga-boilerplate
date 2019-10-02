import { useEffect, useState } from 'react'

export const useDebounce = (input: string | null, delay: number) => {
  const [value, setValue] = useState(input)

  useEffect(() => {
    const prevInput = setTimeout(() => {
      setValue(input)
    }, delay)

    return () => clearTimeout(prevInput)
  }, [input])

  return value
}
