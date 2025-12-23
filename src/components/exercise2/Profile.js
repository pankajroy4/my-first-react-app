export function Profile({ name, children }) {
  return (
    <div>
      <h2>{name}</h2> 
      <div>{children}</div>
    </div>
  );
}
