import { useState } from "react";
export function Toggle(){
  const [on, setOn] = useState(false);

  function handleToggle(){
    setOn(!on)
  }

  return (
    <>
      <button onClick={handleToggle}>{on ? "ON" : "OFF"}</button>
      <p>Status: {on ? "Enabled" : "Disabled"}</p>
    </>
  )
}