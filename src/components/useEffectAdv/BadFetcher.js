import { useEffect, useState } from "react";

export function BadFetcher({ query }) {
  const [apiResult, setData] = useState({
    data: [],
    loading: false,
    error: false,
    err_msg: "",
  });

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        setData((prev) => ({
          ...prev,
          loading: true,
          error: false,
          err_msg: "",
        }));
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${query}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!active) return;
        const data = await response.json();
        setData({ data: data, error: false, err_msg: "", loading: false });
      } catch (err) {
        if (!active) return;
        setData({
          data: [],
          error: true,
          err_msg: err.message,
          loading: false,
        });
      }
    };

    load();
    return () => {
      active = false;
    };
  }, [query]);

  return <pre>{JSON.stringify(apiResult)}</pre>;
}












// import { useEffect, useState } from "react";

// export function GoodFetcher({ query }) {
//   const [apiResult, setData] = useState({
//     data: null,
//     loading: false,
//     error: false,
//     err_msg: "",
//   });

//   useEffect(() => {
//     const controller = new AbortController();

//     async function load() {
//       setData((prev) => ({ ...prev, loading: true, error: false }));

//       try {
//         const response = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${query}`,
//           { signal: controller.signal }
//         );

//         if (!response.ok) throw new Error(`HTTP error ${response.status}`);

//         const data = await response.json();

//         setData({
//           data,
//           loading: false,
//           error: false,
//           err_msg: "",
//         });
//       } catch (err) {
//         if (err.name === "AbortError") return; // request cancelled → ignore

//         setData({
//           data: null,
//           loading: false,
//           error: true,
//           err_msg: err.message,
//         });
//       }
//     }

//     load();

//     return () => controller.abort();
//   }, [query]);

//   return <pre>{JSON.stringify(apiResult, null, 2)}</pre>;
// }
