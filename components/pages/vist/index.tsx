import styled from "@emotion/styled"

import VisitForm from "@/components/forms/VisitForm"

import Friend from "@/public/assets/green/friend.svg"

const VisitContainer = () => {
  return (
    <ContentContainer>
      <VisitForm />

      <Friend width={280} height={381} />
    </ContentContainer>
  )
}

export default VisitContainer

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 7rem;
  gap: 8.4rem;
  min-height: inherit;
  height: inherit;
`
