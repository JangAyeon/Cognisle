import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"

import TextInput from "@/components/atoms/input/TextInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import { useInput } from "@/hooks/useInput"
import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

const VisitForm = () => {
  const [friendEmail, onChangeFriendEmail, setFriendEmail] = useInput("")
  const [friendName, onChangeFriendName, setFriendName] = useInput("")
  const { state, text, isOpen, setStateModal, closeModal, setIsOpen } =
    useStateModal()
  const [isEmailExist, setEmailExist] = useState(false)
  const router = useRouter()

  const visitFriend = () => {
    // 브라우저 url에 사용자 Email, name 노출 안되게
    router.push(`/island?id=${friendEmail}&name=${friendName}`, "/island")
  }

  const checkValidEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await authApi.getUserEmailExist(friendEmail)
    if (data) {
      const { email, name } = data
      setFriendName(name)
      setFriendEmail(email)
      // console.log(data)
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
        <Image
          src="/assets/green/squiggly.png"
          width={51}
          height={21}
          alt="dfads"
        />
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
          imgSrc="/assets/green/search.png"
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
