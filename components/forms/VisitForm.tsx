import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"

import TextInput from "@/components/atoms/input/TextInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import { useInput } from "@/hooks/useInput"
import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import Squiggly from "@/public/assets/green/squiggly.svg"

const VisitForm = () => {
  const [friendEmail, onChangeFriendEmail, setFriendEmail] = useInput("")
  const { state, text, isOpen, setStateModal, closeModal, setIsOpen } =
    useStateModal()
  const [isEmailExist, setEmailExist] = useState(false)
  const router = useRouter()

  const visitFriend = () => {
    router.push(`/island?id=${friendEmail}`)
  }

  const checkValidEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await authApi.getUserEmailExist(friendEmail)
    if (data) {
      setEmailExist(true)
    } else {
      setStateModal({
        state: "fail",
        text: "존재하지 않는 유저입니다",
        isOpen: true,
      })
    }
  }

  useEffect(() => {
    if (isEmailExist) {
      visitFriend()
    }
  }, [isEmailExist])

  return (
    <FormContainer>
      {text && (
        <AuthModal
          state={state}
          text={text}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      <TitleWrapper>
        <Text
          text="친구의 섬 ID"
          weight="bold"
          size={2.4}
          color="--color-green-04"
        />
        <Squiggly width={51} height={21} />
      </TitleWrapper>

      <form onSubmit={checkValidEmail}>
        <TextInput
          value={friendEmail}
          onChange={onChangeFriendEmail}
          placeholder="친구 아이디"
          type="text"
          name="friendId"
          color="--color-green-04"
          backgroundColor="--color-yellow-01"
          width={28.0}
          height={4.0}
          fontSize={1.6}
          padding={1.6}
          imgSrc="/assets/image/search.svg"
          imgHeigth={21}
          imgWidth={21}
          btnType="submit"
        />
      </form>
    </FormContainer>
  )
}

export default VisitForm

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  padding-top: 7.2rem;
`
