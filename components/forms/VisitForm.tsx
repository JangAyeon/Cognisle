import styled from "@emotion/styled"
import { FormEvent } from "react"

import TextInput from "@/components/atoms/input/TextInput"
import Text from "@/components/atoms/typo/Text"

import { useInput } from "@/hooks/useInput"

import Squiggly from "@/public/assets/green/squiggly.svg"

const VisitForm = () => {
  const [friendId, onChangeFriendId, setFriendId] = useInput("")

  const handleFriendSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(friendId)
  }
  return (
    <FormContainer>
      <TitleWrapper>
        <Text
          text="친구의 섬 ID"
          weight="bold"
          size={2.4}
          color="--color-green-04"
        />
        <Squiggly width={51} height={21} />
      </TitleWrapper>

      <form onSubmit={handleFriendSubmit}>
        <TextInput
          value={friendId}
          onChange={onChangeFriendId}
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
