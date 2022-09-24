export const Button = ({ children, bgColor, borderColor, textColor }) => {
  return <button className={`rounded-full ${bgColor} ${borderColor} border-[1px] px-4 py-1 text-sm ${textColor}`}>{children}</button>
}
