import { useEffect, useRef } from "react";

export function usePrevious(prevValue ) {
  const prev = useRef();

  useEffect(() => {
    prev.current = prevValue
  }, [prevValue])
  return prev.current
}