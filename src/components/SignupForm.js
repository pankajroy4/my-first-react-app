import { useState } from "react";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") return;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    setName("");
    setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="m-2 btn btn-success">
          Signup
        </button>
      </form>
    </>
  );
}
