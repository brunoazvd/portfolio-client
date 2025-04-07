
export const Container = ({children, ...props}) => {
  return (
    <div {...props} className="max-w-7xl mx-auto">
        {children}
    </div>
  )
}
