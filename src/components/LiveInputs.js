// function LiveInputs(){
//   let name = "";

//   function handleChange(e){
//     name = e.target.value;
//     console.log(`You typed ${name} `)
//   }

//   return (
//     <>
//       <input onChange={handleChange}/>
//       <p>You Typed: {name}</p>
//     </>
//   );
// }

// export default LiveInputs;



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