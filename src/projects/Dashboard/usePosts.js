import { useEffect, useState, useRef, useCallback } from "react";

export function usePosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cache = useRef(null);
  const requestId = useRef(0);

  const fetchPosts = useCallback(async () => {
    if (cache.current) {
      setAllPosts(cache.current);
      return;
    }

    const currentRequest = ++requestId.current;
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      if (requestId.current !== currentRequest) return;
      cache.current = data;
      setAllPosts(data);
    } catch {
      if (requestId.current === currentRequest) setError(true);
    } finally {
      if (requestId.current === currentRequest) setLoading(false);
    }
  }, []);

  const refetch = useCallback(() => {
    cache.current = null;
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts: allPosts, loading, error, refetch };
}
