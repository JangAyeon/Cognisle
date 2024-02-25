import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect } from "react"

import AuthModal from "@/components/modal/AuthModal"

import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import { removeUserInfo } from "@/utils/auth"

const LogoutBtn = () => {
  const router = useRouter()
  const { state, text, isOpen, setStateModal } = useStateModal()

  const handleLogout = async () => {
    try {
      const { error } = await authApi.logout()
      removeUserInfo()
      setStateModal({ text: "로그아웃 성공", state: "success", isOpen: true })
    } catch (error: any) {
      setStateModal({ text: error.message, state: "fail", isOpen: true })
    }
  }

  const handleModalClose = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setStateModal({ text, state, isOpen: false })
  }

  useEffect(() => {
    if (isOpen) {
      handleModalClose()
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
          onClose={() => setStateModal({ state, text, isOpen: false })}
        />
      )}
      <Button onClick={handleLogout}>로그아웃 logout</Button>
    </>
  )
}

export default LogoutBtn

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
`

const Button = styled.button`
  font-weight: bold;
  font-size: 2.4px;
`
