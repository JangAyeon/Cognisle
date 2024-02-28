import { useEffect, useState } from "react"

import { IAuthModal } from "@/components/modal/AuthModal"

type setStateModalProps = ({
  state,
  text,
  isOpen,
}: Omit<IAuthModal, "onClose">) => void
export const useStateModal = () => {
  const [state, setState] = useState<IAuthModal["state"]>("fail")
  const [text, setText] = useState<string>("")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const setStateModal = ({
    state,
    text,
    isOpen,
  }: Omit<IAuthModal, "onClose">) => {
    setIsOpen(isOpen)
    setText(text)
    setState(state)
  }

  const closeModal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 150000000))
    setStateModal({ state, text, isOpen: false })
  }

  useEffect(() => {
    if (isOpen) {
      closeModal()
    }
  }, [isOpen])

  return {
    state,
    setState,
    text,
    setText,
    isOpen,
    setIsOpen,
    setStateModal,
    closeModal,
  }
}

export default useStateModal

export type { setStateModalProps }
