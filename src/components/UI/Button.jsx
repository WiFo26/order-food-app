export const Button = ({ children, onClick, bgColor, borderColor, textColor }) => {
  return <button onClick={onClick} className={`rounded-full ${bgColor} ${borderColor} border-[1px] px-4 py-1 text-sm ${textColor}`}>{children}</button>
}
