import { createPortal } from 'react-dom'
import { Backdrop } from './Backdrop'
import { ModalOverlay } from './ModalOverlay'

export const Modal = ({ children }) => {
  const overlayElement = document.getElementById('overlays')
  return (
    <>
      {createPortal(<Backdrop />, overlayElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, overlayElement)}
    </>
  )
}
