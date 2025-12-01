import { useState, useEffect } from "react";

export function APIFetcher() {
  const [apiResult, setApiResult] = useState({ loading: false, error: false, data: [], errorMessage: "" })

  useEffect(() => {
    async function loadData() {
      try {
        setApiResult({ loading: true, error: false, data: [], errorMessage: "" });
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setApiResult({ loading: false, error: false, data: result, errorMessage: "" });
      } catch (error) {
        setApiResult({ loading: false, error: true, data: [], errorMessage: err.message });
      }
    }

    loadData();
  }, [])

  return (
    <div className="container mt-4">

      {apiResult.loading && (
        <div className="alert alert-info text-center py-3">
          <div className="spinner-border spinner-border-sm me-2"></div>
          Loading Data...
        </div>
      )}

      {!apiResult.loading && apiResult.error && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {apiResult.errorMessage}
        </div>
      )}

      {!apiResult.loading && !apiResult.error && (
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-success text-center mb-3">Data Fetched Successfully!</h5>

            <ul className="list-group">
              {apiResult.data.map((item) => (
                <li key={item.id} className="list-group-item">
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}