// // Version 1:
// // -----------

// import { useState } from "react";
// import { MousePositionTracker } from "./MousePositionTracker";

// export function StartMousePositionTracker(){
//   const [mousePosition, setMousePosition] = useState({x: null,y: null});
//   const [startTracker, setStartTracker] = useState(false);

//   // Here we have to stablize the handler to prevent memory-leak
//   const handler = useCallback((e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   }, []);


//   function handleClick(){
//     setStartTracker(prev => !prev)
//   }

//   return (
//     <div>
//       <p>Mouse X: {mousePosition.x}</p>
//       <p>Mouse Y: {mousePosition.y}</p>
//       <button onClick={handleClick}>{startTracker ? "Stop" : "Start"} Tracker</button>
//       {startTracker && <MousePositionTracker handler={handler}/>}
//     </div>
//   );
// }




// // Version 2:
// // ---------------
import { useState } from "react";
import { MousePositionTracker } from "./MousePositionTracker";

export function StartMousePositionTracker(){
  const [startTracker, setStartTracker] = useState(false);

  function handleClick(){
    setStartTracker(prev => !prev)
  }

  return (
    <div>
      <button onClick={handleClick}>{startTracker ? "Stop" : "Start"} Tracker</button>
      {startTracker && <MousePositionTracker/>}
    </div>
  );
}