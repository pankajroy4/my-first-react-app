// // Version 1:
// // -------------------
// import { useEffect } from "react";

// export function MousePositionTracker({handler}){
//   useEffect(()=>{
//     console.log("Mounted. EvenListener Added!")
//     window.addEventListener("mousemove", handler);
//     return ()=> {
//       console.log("Unmounted. EvenListener removed!")
//       window.removeEventListener("mousemove", handler)}
//   },[])
// }




// // Version 2:
// // -------------------
import { useEffect, useState } from "react";

export function MousePositionTracker(){
  const [mousePosition, setMousePosition] = useState({x: null,y: null});

  function handler(e){
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(()=>{
    console.log("Mounted. EvenListener Added!")
    window.addEventListener("mousemove", handler);
    return ()=> {
      console.log("Unmounted. EvenListener removed!")
      window.removeEventListener("mousemove", handler)}
  },[])

  return (
    <div>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
    </div>
  )
}