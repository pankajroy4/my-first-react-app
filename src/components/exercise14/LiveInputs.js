
import { useState } from "react";
function LiveInputs(){
  const [name, setName] = useState("");

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleChange}/>
      <p>You Typed: {name}</p>
    </>
  );
}

export default LiveInputs;