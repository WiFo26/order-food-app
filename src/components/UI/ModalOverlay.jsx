export const ModalOverlay = ({ children }) => {
  return (
    <div className='fixed inset-x-0 top-32 z-20 h-screen w-full '>
      <div className='mx-auto w-1/3'>{children}</div>
    </div>
  )
}
