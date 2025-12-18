import { useEffect, useRef } from "react";

export function useTimeout(callback, delay){
  if (delay == null) return;
  const handler =  useRef();

  useEffect(()=>{
    handler.current = callback;
  }, [callback])

  useEffect(()=>{
    const id = setTimeout(()=>{
      handler.current()
    },delay)

    return (()=>(clearTimeout(id)))
  }, [delay])
}