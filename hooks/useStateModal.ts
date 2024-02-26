import { useState } from "react"

import { IAuthModal } from "@/components/modal/AuthModal"

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

  return { state, setState, text, setText, isOpen, setIsOpen, setStateModal }
}

export default useStateModal
