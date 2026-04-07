// export function UserCard({user: {name, role}}){
//   return(
//     <div>
//       <p>Name: {name}</p>
//       <p>Role: {role}</p>
//     </div>
//   );
// }


// ==========Another way===============
// export function UserCard(props){
//   return(
//     <div>
//       <p>Name: {props.user.name}</p>
//       <p>Role: {props.user.role}</p>
//     </div>
//   );
// }

// ==========Another way===============
// export function UserCard({user}){
//   // Here ({ user }) means: “extract the user property from the props object.
//   return(
//     <div>
//       <p>Name: {user.name}</p>
//       <p>Role: {user.role}</p>
//     </div>
//   );
// }


/*
NOTE:
  what does "user: {name, role}" means?

  It means:
    take user property from props
    extract name and role
    do NOT create a user variable

  So, Inside function, you only have name and role. You do not have user.
*/