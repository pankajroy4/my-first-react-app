import SeachBar from "./SearchBar";
import SearchResults from "./SearchResults";

function SearchContainer(){
  let searchedText = ""// It is not a state, so updating it will not cause re-render and you will not see in UI

  const items = ["mango", "orange", "Apple"];

  function handleSearchChange(vlaue){
    searchedText = vlaue;
    console.log(`You typed: ${vlaue}`)
  }

  const result = items.find(item => item === searchedText) || "";

  return (
    <>
      <SeachBar onSearch = {handleSearchChange}/>
      <SearchResults result ={result}/>
    </>
  );
}

export default SearchContainer;

