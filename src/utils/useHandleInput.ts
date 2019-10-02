import { useCallback, useState } from 'react'

export const useHandleInput = (initValue: string) => {
  const [value, setValue] = useState(initValue)

  const onChange = useCallback(event => {
    setValue(event.target.value)
  }, [])

  return { base: { value, onChange }, setValue }
}
