import { useEffect, useState } from "react";

export function Broken() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count => count+1);
  }, []);

  return <p>{count}</p>;
}
