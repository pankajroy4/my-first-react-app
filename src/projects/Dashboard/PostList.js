import { PostItem } from "./PostItem";

export function PostList({ posts, onRefresh, page, totalPages, onNext, onPrev }) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">

        {!posts.length > 0 ? (
          <div className="alert alert-warning text-center">
            No posts found
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary" onClick={onPrev} disabled={page === 1} >
                Previous
              </button>

              <div className="d-flex justify-content-center align-items-center">
                <h5 className="card-title text-success mb-0 mx-2">
                  Data Fetched Successfully!
                </h5>
                <button className="btn btn-sm btn-secondary" onClick={onRefresh} > Refetch </button>
                <span className="mx-2"> Page {page} of {totalPages} </span>
              </div>

              <button className="btn btn-outline-primary" onClick={onNext} disabled={page === totalPages || totalPages === 0} >
                Next
              </button>
            </div>

            <ul className="list-group mt-2 mb-2">
              {posts?.map((item) => (
                <PostItem key={item.id} item={item} />
              ))}
            </ul>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary" onClick={onPrev} disabled={page === 1} >
                Previous
              </button>

              <button className="btn btn-outline-primary" onClick={onNext} disabled={page === totalPages || totalPages === 0} >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
