// import { useState, useEffect } from "react";

// export function LiveClock() {
//   const now = new Date();

//   const [time, setTime] = useState({ hour: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds() });

//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime((prev) => {
//         let { hour, minutes, seconds } = prev;
//         seconds += 1;

//         if (seconds >= 60) {
//           minutes += 1;
//           seconds = 0;
//         }

//         if (minutes >= 60) {
//           hour += 1;
//           minutes = 0;
//         }

//         if (hour >= 24) {
//           hour = 0;
//         }

//         return { hour: hour, minutes: minutes, seconds: seconds };
//       });
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return <p>{`${time.hour}:${time.minutes}:${time.seconds}`}</p>;
// }


// ====================================

import { useState, useEffect } from "react";

export function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);


  const pad = n => String(n).padStart(2, "0");
  return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

}
