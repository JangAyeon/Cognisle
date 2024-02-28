import { useState } from "react"

const useCopy = () => {
  const [isCopy, setIsCopy] = useState(false)
  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopy(true)
    } catch (error) {
      setIsCopy(false)
      return false
    }
  }

  return { isCopy, onCopy }
}

export default useCopy
