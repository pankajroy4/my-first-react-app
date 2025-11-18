// import { useState } from "react";

// export function SignupForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (name.trim() === "" || email.trim() === "") return;
//     console.log(`Name: ${name}`);
//     console.log(`Email: ${email}`);
//     setName("");
//     setEmail("");
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             value={email}
//             placeholder="Email"
//             className="form-control"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="m-2 btn btn-success">
//           Signup
//         </button>
//       </form>
//     </>
//   );
// }




// ====================

import { useState } from "react";

export function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleNameChange(e) {
    const newName = e.target.value;

    // When you pass a function to setForm, React automatically gives that function the previous state value as its argument.
    setForm(prev => {
      // When using useState you must replace the entire state value, not just part of it.
      return {
        ...prev,
        name: newName
      };
    });
  }

  function handleEmailChange(e) {
    const newEmail = e.target.value;

    setForm(prev => ({
      ...prev,
      email: newEmail
    }));
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (form.name.trim() === "" || form.email.trim() === "") return;
    console.log(`Name: ${form.name}`);
    console.log(`Email: ${form.email}`);
    setForm({ name: "", email: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={form.name}
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            value={form.email}
            placeholder="Email"
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit" className="m-2 btn btn-success">
          Signup
        </button>
      </form>
    </>
  );
}
