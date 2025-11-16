// import { useState, useRef } from "react";

// export function ToDo(){
//   const [tasks, addTask] = useState([]);
//   const inputRef = useRef(null)

//   function handleAddTask(){
//     const value = inputRef.current.value.trim();
//     if(value){
//       addTask([...tasks, value])
//        inputRef.current.value = "";
//     }
//   }

//   return(
//     <>
//       <input type = "text" ref={inputRef} />
//       <button onClick={handleAddTask}>Add task</button>
//       <ul>
//         {
//           tasks.map((task) => {
//             return <li key={task}>{task}</li>;
//           })
//         }
//       </ul>
//     </>
//   );
// }


import { useState } from "react";

export function ToDo(){
  const [tasks, setTask] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e){
    const val = e.target.value
    setInput(val);
  }

  function handleAddTask(){
    if(input.trim() === "") return;
    setTask([...tasks, input]);
    setInput("");
  }

  return (
    <>
      <input value = {input} onChange={handleInput}/>
      <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
      <ul>
        {
          tasks.map((task, index)=>{
            return <li key={index}>{task}</li>
          })
        }
      </ul>
    </>
  );
}