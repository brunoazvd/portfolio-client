
export const Container = ({children, ...props}) => {
  return (
    <div {...props} className="max-w-7xl mx-auto p-8 xl:p-0">
        {children}
    </div>
  )
}
