import { useEffect, useState } from "react";

export function Timer(){
  const [second, setSecond] = useState(0);
  useEffect(()=>{
    const id = setInterval(() => {
      setSecond(prev => prev+1)
    }, 1000);

    setTimeout(() => {
      clearInterval(id)
    }, 10000);

    return (()=> {clearInterval(id)}
    )
  },[])

  return (
    <>
    <p>Time: {second}</p>
    </>
  )

}