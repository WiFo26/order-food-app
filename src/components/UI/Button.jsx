export const Button = ({ children, toggleModal, bgColor, borderColor, textColor }) => {
  return <button onClick={toggleModal} className={`rounded-full ${bgColor} ${borderColor} border-[1px] px-4 py-1 text-sm ${textColor}`}>{children}</button>
}
