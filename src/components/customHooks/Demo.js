// ================  Week 2, Day - 6 , Exercise - 1 ======================= 

// import { useToggle } from "./useToggle";

// export function Demo() {
//   const [value, toggle] = useToggle(false);

//   return (
//     <>
//       <button onClick={toggle}> Toggle </button>
//       <p>Current theme: {value? "Light" : "Dark"}</p>
//     </>
//   );
// }

// ================  Week 2, Day - 6 , Exercise - 2 ======================= 

// import { useLocalStorage } from "./useLocalStorage";

// export function Demo() {
//   const [value, setValue] = useLocalStorage("theme", "light");

//   return (
//     <>
//       <button onClick={() => setValue((prev) => (prev === "light" ? "dark" : "light"))}>
//         Toggle Theme
//       </button>

//       <p>Current theme in Local Storage: {value}</p>
//     </>
//   );
// }


// ================  Week 2, Day - 6 , Exercise - 3 ======================= 

// import { useState } from "react";
// import { usePrevious } from "./usePrevious";
// export function Demo() {
//   const [count, setCount] = useState(0);
//   const prevVal = usePrevious(count)

//   const handleClick = ()=>{
//     setCount(prev => prev+1)
//   }

//   return (
//     <div>
//         <button onClick={handleClick}>Increment Count</button>
//       <p>
//         Current value is: {count}
//       </p>
//       <p>
//         Previous value is: {prevVal}
//       </p>
//     </div>
//   )
// }

// ================  Week 2, Day - 6 , Exercise - 4 ======================= 

// import { useFetch } from "./useFetch";
// export function Demo() {
//   const { data, loading, error, msg } = useFetch("https://jsonplaceholder.typicode.com/posts")

//   return (
//     <div className="container mt-4">

//       {loading && (
//         <div className="alert alert-info text-center py-3">
//           <div className="spinner-border spinner-border-sm me-2"></div>
//           Loading Data...
//         </div>
//       )}

//       {!loading && error && (
//         <div className="alert alert-danger">
//           <strong>Error:</strong> {msg}
//         </div>
//       )}

//       {!loading && !error && (
//         <div className="card shadow-sm">
//           <div className="card-body">
//             <h5 className="card-title text-success text-center mb-3">Data Fetched Successfully!</h5>

//             <ul className="list-group">
//               {data.map((item) => (
//                 <li key={item.id} className="list-group-item">
//                   <h6 className="mb-1 fw-bold">{item.title}</h6>
//                   <p className="mb-0">{item.body}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


// ================  Week 2, Day - 6 , Exercise - 5 ======================= 
// import { useTimeout } from "./useTimeout";

// export function Demo() {
//   useTimeout(()=>(console.log("executed after 2 sec")),2000)
//   return
// }


// ================  Week 2, Day - 6 , Exercise - 6 - Bonus ======================= 
import { useLocalStorage } from "./useLocalStorage";
import { usePrevious } from "./usePrevious";

export function Demo() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const prevTheme = usePrevious(theme);

  function handleToggle() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <button onClick={handleToggle}>
        Toggle Theme
      </button>

      <p>Current theme: {theme}</p>
      <p>Previous theme: {prevTheme}</p>
    </>
  );
}
