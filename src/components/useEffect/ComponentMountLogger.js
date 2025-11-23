import { useEffect } from "react";

export function ComponentMountLogger(){
  useEffect(()=>{
    console.log("Component Mounted")
    return ()=> {console.log("Component Unmounted")}
  }, [])

  return(
    <div>
      <p>Welcome to React use effect Demo</p>
    </div>
  );
}