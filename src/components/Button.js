export function Button({ children, ...props }) {
  return (
    <button {...props} className="btn btn-success m-2">
      {children}
    </button>
  );
}
