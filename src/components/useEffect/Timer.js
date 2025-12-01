// import { useEffect, useState } from "react";

// export function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setSeconds(prev => {
//         if (prev >= 10) {
//           clearInterval(id);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return <p>Seconds passed: {seconds}</p>;
// }


// version 2:
// ===================

import { useEffect, useState } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (seconds >= 10) {
      setSeconds(10);
    }
  }, [seconds]);

  return <p>Seconds passed: {seconds}</p>;
}
