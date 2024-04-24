import { useEffect, useRef } from 'react'

const useDebouncedEffect = (
  func: () => void,
  dependencyArray: any[],
  wait: number
) => {
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current)
        func(...args)
      }
      clearTimeout(timeout.current)
      timeout.current = setTimeout(later, wait)
    },
    [...dependencyArray]
  )
}

export default useDebouncedEffect
