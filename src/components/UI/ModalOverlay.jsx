export const ModalOverlay = ({ children }) => {
  return (
    <div className='fixed left-1/2 top-32 z-20 -translate-x-1/2'>
      <div className='w-[600px]'>{children}</div>
    </div>
  )
}
