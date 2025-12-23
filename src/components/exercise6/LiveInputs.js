function LiveInputs(){
  let name = "";

  function handleChange(e){
    name = e.target.value;
    console.log(`You typed ${name} `)
  }

  return (
    <>
      <input onChange={handleChange}/>
      <p>You Typed: {name}</p>
    </>
  );
}

export default LiveInputs;
