function SeachBar({onSearch}) {
  function hanldeInput(e){
    let value = e.target.value
    onSearch(value)
  }
  return <input onChange={hanldeInput} />
}

export default SeachBar;
