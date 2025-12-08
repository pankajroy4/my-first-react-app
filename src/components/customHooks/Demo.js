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

import { useLocalStorage } from "./useLocalStorage";

export function Demo() {
  const [value, setValue] = useLocalStorage("theme", "light");

  return (
    <>
      <button onClick={() => setValue((prev) => (prev === "light" ? "dark" : "light"))}>
        Toggle Theme
      </button>

      <p>Current theme in Local Storage: {value}</p>
    </>
  );
}
