import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect } from "react"

import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import { removeUserInfo } from "@/utils/auth"

const LogoutBtn = () => {
  const router = useRouter()
  const { state, text, isOpen, setStateModal, setIsOpen } = useStateModal()

  const handleLogout = async () => {
    try {
      const { error } = await authApi.logout()
      removeUserInfo()
      setStateModal({ text: "로그아웃 성공", state: "success", isOpen: true })
    } catch (error: any) {
      setStateModal({ text: error.message, state: "fail", isOpen: true })
    }
  }

  useEffect(() => {
    if (isOpen) {
      router.reload()
    }
  }, [isOpen])

  return (
    <>
      {text && (
        <AuthModal
          state={state}
          text={text}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      <Button onClick={handleLogout}>로그아웃</Button>
    </>
  )
}

export default LogoutBtn

const Button = styled.button`
  margin-top: 2.4rem;
  font-size: 1.2rem;
  color: var(--color-green-04);
  text-decoration: underline;
`
