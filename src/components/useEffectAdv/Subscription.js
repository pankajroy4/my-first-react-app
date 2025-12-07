import { useEffect, useState } from "react";

export function Subscription({ webhook }) {
  const [msg, setMessage] = useState("");

  useEffect(() => {
    const cancelSubs = webhook(setMessage);
    return cancelSubs;
  }, [])
  
  return <p>{msg}</p>
}
