function Card({ title, children }) {
  return (
    <div className="card shadow-sm p-3 mb-4 bg-white rounded">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}

export default Card;
