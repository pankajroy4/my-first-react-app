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

// import { useState } from "react";

// export function ToDo(){
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editingValue, setEditingValue] = useState("");
  
  
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

//   function handleEdit(index, task){
//     setEditingIndex(index)
//     setEditingValue(task)
//   }

//   function handleSave(){
//     if(editingValue.trim() === "") return
    //   // Big. issue here:
    //   // tasks is state array, and this line changes it directly, which is not allowed in React.
    //   // React state must be treated as immutable.
    //   // tasks is just a reference to the array inside React's state.

    //   // When we write:
    //   // tasks[editingIndex] = editingValue;
    //   // We are modifying the existing array in place.
    //   // So we directly editing React's internal state object.


//     tasks[editingIndex] = editingValue;
//     setEditingIndex(null)
//     setEditingValue("")
//   }
//   function handleChange(e){
//     setEditingValue(e.target.value)
//   }

//   function handleCancel(){
//     setEditingIndex(null)
//     setEditingValue("")
//   }

//   return (
//     <>
//       <input value = {input} onChange={handleInput}/>
//       <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {
//           tasks.map((task, index)=>{
//             return  <li key={index}>
//                       { index !== editingIndex && 
//                         <div>
//                           {task}
//                           <button onClick={()=>handleDelete(task)}>Delete</button> 
//                           <button onClick={()=>handleEdit(index,task)}>Edit</button>
//                         </div>
//                       }
//                       {
//                         (index === editingIndex)  &&
//                         <div>
//                           <input value= {editingValue} onChange={handleChange} />
//                           <button onClick={handleSave}>Save</button> 
//                           <button onClick={handleCancel}>Cancel</button> 
//                         </div>
//                       } 
//                     </li>
//           })
//         }
//       </ul>
//     </>
//   );
// }



// ================== Tasks as object==========================

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
    setTasks([...tasks, {id: tasks.length+1, text: input, completed: false}]);
    setInput("");
  }

  function handleDelete(task){
    setTasks(tasks.filter(t => t.text !== task))    
  }

  function handleEdit(index, task){
    setEditingIndex(index)
    setEditingValue(task.text)
  }

  function handleSave(){
    if(editingValue.trim() === "") return
    tasks[editingIndex].text = editingValue;
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

  function handleComplete(task){
    task.completed = true
    setTasks([...tasks])
  }

  return (
    <>
      <input value = {input} onChange={handleInput}/>
      <button className="btn btn-outline-dark" onClick={handleAddTask}>Add Task</button>
      <p>Total: {tasks.length}</p>
      <p>Completed: {tasks.filter(t => t.completed).length}</p>
      <ul>
        {
          tasks.map((task, index)=>{
            return(
              <li key={index}>
                      { index !== editingIndex && 
                        <div>
                          {task.text}
                          <button onClick={()=>handleDelete(task.text)}>Delete</button> 
                          <button onClick={()=>handleEdit(index, task)}>Edit</button>
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

                      {
                        !task.completed &&
                        <button onClick={()=>handleComplete(task)}>Mark Complete</button>
                      }
              </li>
            )
          })
        }
      </ul>
    </>
  );
}



// In all above ToDO , we did lot of mistake like mutatig the state objet itself, using index as key , deleting item by  text matching , finding by index etc. 
//  We will fix all this problem in below version:

