import { useEffect, useState } from "react"
import Modal from "@/components/atoms/modal/Modal"
import styled from "@emotion/styled"

type ItemProps = {
  name: string
  description: string
  imgSrc: string
}

const Loading = () => {
  return <div>I am loading</div>
}

const ShowItemModal = ({
  id,
  isOpen,
  onClose,
}: {
  id: number
  isOpen: boolean
  onClose: () => void
}) => {
  // const [loading, setLoading] = useState<boolean>(true)
  // const [data, setData] = useState<ItemProps>()

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={300} height={300}>
        <Modal.CloseButton />
        <Modal.Body>
          <Container>My id: {id}</Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ShowItemModal

const Container = styled.div``
