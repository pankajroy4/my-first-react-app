import { useEffect, useState } from "react";

export function SmartSearch() {
  const [apiResult, setApiResult] = useState({ loading: false, error: false, data: [], errorMessage: "" })
  const [searchedText, setSearchedText] = useState("");

  const handleChange = (e) => {
    setSearchedText(e.target.value)
  }

  useEffect(() => {
    if (searchedText === "") {
      setApiResult({ loading: false, error: false, data: [], errorMessage: "" });
      return;
    }
    let active = true;
    const id = setTimeout(async () => {
      setApiResult({ loading: true, error: false, data: [], errorMessage: "" });
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!active) return;
        const data = await response.json();
        const filtered = data.filter(user =>
          user.name.toLowerCase().includes(searchedText.toLowerCase())
        );

        setApiResult({ loading: false, error: false, data: filtered, errorMessage: "" });
      } catch (err) {
        if (!active) return;
        setApiResult({ loading: false, error: true, data: [], errorMessage: err.message });
      }
    }, 500);

    return (() => {
      clearTimeout(id)
      active = false;
    })
  }, [searchedText])

  return (
    <div className="container mt-4">
      <input type="text" className="form-control mb-3" onChange={handleChange} value={searchedText} placeholder="Type anything" />

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
            {(apiResult.data.length > 0) ? (
              <h5 className="card-title text-success text-center mb-3">Data Fetched Successfully!</h5>
            ) : (<h5 className="card-title text-success text-center mb-3">Type something to search!</h5>
            )}

            <ul className="list-group">
              {apiResult.data.map((item) => (
                <li key={item.id} className="list-group-item">
                  <h6 className="mb-1 fw-bold">Name: {item.name}</h6>
                  <p className="mb-0">Email: {item.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}