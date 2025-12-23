export function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick} className="btn btn-success m-2">
        {children}
      </button>
    </>
  );
}
