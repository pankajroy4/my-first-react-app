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

// // ============================================

// import { useState } from "react";

// export function ToDo(){
//   const [tasks, setTask] = useState([]);
//   const [input, setInput] = useState("");

//   function handleInput(e){
//     const val = e.target.value
//     setInput(val);
//   }

//   function handleAddTask(){
//     if(input.trim() === "") return;
//     setTask([...tasks, input]);
//     setInput("");
//   }

//   return (
//     <>
//       <input value = {input} onChange={handleInput}/>
//       <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {
//           tasks.map((task, index)=>{
//             return <li key={index}>{task}</li>
//           })
//         }
//       </ul>
//     </>
//   );
// }


// // ==================Deleteable==========================

// import { useState } from "react";

// export function ToDo(){
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");

//   function handleInput(e){
//     const val = e.target.value
//     setInput(val);
//   }

//   function handleAddTask(){
//     if(input.trim() === "") return;
//     setTasks([...tasks, input]);
//     setInput("");
//   }

//   function handleDelete(task){
//     setTasks(tasks.filter(t => t !== task))    
//   }

//   return (
//     <>
//       <input value = {input} onChange={handleInput}/>
//       <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {
//           tasks.map((task, index)=>{
//             return <li key={index}>
//                     {task} 
//                     <button onClick={()=>handleDelete(task)}>Delete</button> 
//                     {/* Assuming Tasks are unique. Other wise we have to pass the index */}
//                   </li>
//           })
//         }
//       </ul>
//     </>
//   );
// }


// // ==================Editable==========================

import { useState } from "react";

export function ToDo(){
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  
  
  function handleInput(e){
    const val = e.target.value
    setInput(val);
  }

  function handleAddTask(){
    if(input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  function handleDelete(task){
    setTasks(tasks.filter(t => t !== task))    
  }

  function handleEdit(index){
    setEditingIndex(index)
  }

  function handleSave(){
    if(editingValue.trim() === "") return
    tasks[editingIndex] = editingValue;
    setEditingIndex(null)
    setEditingValue("")
  }
  function handleChange(e){
    setEditingValue(e.target.value)
  }

  function handleCancel(){
    setEditingIndex(null)
    setEditingValue("")
  }

  return (
    <>
      <input value = {input} onChange={handleInput}/>
      <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
      <ul>
        {
          tasks.map((task, index)=>{
            return  <li key={index}>
                      { index !== editingIndex && 
                        <div>
                          {task}
                          <button onClick={()=>handleDelete(task)}>Delete</button> 
                          <button onClick={()=>handleEdit(index)}>Edit</button>
                        </div>
                      }
                      {
                        (index === editingIndex)  &&
                        <div>
                          <input value= {editingValue} onChange={handleChange} />
                          <button onClick={handleSave}>Save</button> 
                          <button onClick={handleCancel}>Cancel</button> 
                        </div>
                      } 
                    </li>
          })
        }
      </ul>
    </>
  );
}