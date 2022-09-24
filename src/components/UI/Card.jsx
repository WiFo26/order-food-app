export const Card = ({ children, bgColor, textColor }) => {
  return (
    <div className={`w-full rounded-lg p-6 ${bgColor} ${textColor} shadow-2xl`}>
      {children}
    </div>
  )
}
