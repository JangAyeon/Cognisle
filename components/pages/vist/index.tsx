import styled from "@emotion/styled"

import VisitForm from "@/components/forms/VisitForm"

import Friend from "@/public/assets/green/friend.svg"

const VisitRequest = () => {
  return (
    <FormContainer>
      <VisitForm />

      <Friend width={280} height={381} />
    </FormContainer>
  )
}

export default VisitRequest

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: inherit;
  gap: 8.4rem;
  margin-bottom: 7rem;
`
