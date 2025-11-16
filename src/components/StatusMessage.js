export function StatusMessage({isLoggedIn}){
  return(
    <p>
      {isLoggedIn ? "Welcome Back!": "Please LogIn." }
    </p>
  )
}