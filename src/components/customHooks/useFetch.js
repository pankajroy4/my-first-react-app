import { useState, useEffect } from "react";

export function useFetch( url) {
  const [data, setData] = useState({ data: null, loading: true, error: false, err_msg: "" })

  useEffect(() => {
    if (!url) return;
    let active = true;
    const load = async () => {
      try {
        setData((prev) => ({ ...prev, loading: true, error: false, err_msg: "", }));
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!active) return;
        const data = await response.json();
        setData({ data: data, error: false, err_msg: "", loading: false });
      } catch (err) {
        if (!active) return;
        setData({ data: [], error: true, err_msg: err.message, loading: false});
      }
    };

    load();
    return () => {
      active = false;
    };
  }, [url]);

  return { data: data.data, loading: data.loading, error: data.error, msg: data.err_msg}
}