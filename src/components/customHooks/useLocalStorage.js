import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const stored = localStorage.getItem(key);
    if (stored !== null) {
      try {
        return JSON.parse(stored);
      } catch {
        return initialValue;
      }
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


// Note: Here we pass a function to useState.
// “When we pass a function to useState, React treats it as a lazy initializer and only executes it on the initial render. This is useful when computing the initial state is expensive, like reading from localStorage. If we pass a direct value, that expression is evaluated on every render, even though React only uses it once.”