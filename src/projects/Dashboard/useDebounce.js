import { useEffect, useState } from "react";

export function useDebounce(searchedText, delay) {
  const [text, setText] = useState("")

  useEffect(() => {
    const id = setTimeout(() => {
      setText(searchedText);
    }, delay);

    return(()=>{clearTimeout(id)})

  }, [searchedText, delay])

  return text;
}