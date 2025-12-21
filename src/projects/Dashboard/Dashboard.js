import { usePosts } from "./usePosts";
import { PostList } from "./PostList";
import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "./useDebounce";

export function Dashboard() {
  const [searchedText, setSearchedText] = useState("");
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(searchedText, 500)
  const PAGE_SIZE = 10;

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  const { posts, loading, error, refetch } = usePosts();

  const filteredPosts = useMemo(() => {
    if (!debouncedQuery.trim()) return posts;
    return posts.filter(post =>
      post.title.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
    );
  }, [posts, debouncedQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));


  const perPagePosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredPosts.slice(start, start + PAGE_SIZE);
  }, [filteredPosts, page]);


  const nextPage = () => setPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setPage(p => Math.max(p - 1, 1));

  return (
    <div className="container mt-4">
      <input type="text" className="form-control mb-3" value={searchedText} onChange={e => setSearchedText(e.target.value)} placeholder="Search Post" />

      {loading && (
        <div className="alert alert-info text-center">
          Loading...
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-danger">
          Something went wrong
        </div>
      )}

      {!loading && !error && posts && (
        <PostList posts={perPagePosts} onRefresh={refetch} page={page} totalPages={totalPages} onNext={nextPage} onPrev={prevPage} />
      )}
    </div>
  );
}

