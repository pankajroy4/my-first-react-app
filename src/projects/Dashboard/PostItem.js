export function PostItem({ item }) {
  return (
    <li className="list-group-item">
      <h6 className="fw-bold">{item.title}</h6>
      <p className="mb-0">{item.body}</p>
    </li>
  );
}
