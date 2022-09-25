import { createPortal } from 'react-dom'
import { Backdrop } from './Backdrop'
import { ModalOverlay } from './ModalOverlay'

export const Modal = ({ children, toggleModal }) => {
  const overlayElement = document.getElementById('overlays')
  return (
    <>
      {createPortal(<Backdrop toggleModal={toggleModal} />, overlayElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, overlayElement)}
    </>
  )
}
