export function UserCard({user: {name, role}}){
  return(
    <div>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}