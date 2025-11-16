export function Alert({type, children}){
  const styles ={
    success: "green",
    error: "red",
    warning: "orange"
  }

  return (
    <p style={{color: styles[type]}}>{children}</p>
  )
}