export function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className="btn btn-success m-2">
        {text}
      </button>
    </>
  );
}
