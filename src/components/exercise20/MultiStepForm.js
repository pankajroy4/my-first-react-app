import { useState } from "react";

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", age: "", email: "", password: "" });

  function hanldeNext() {
    if (step === 1 && (form.name.trim() === "" || form.age.trim() === "" || isNaN(form.age.trim()))) return
    else if (step === 2 && (form.email.trim() === "" || form.password.trim() === "")) return
    else if (step === 3) return;
    setStep((prev) => prev + 1)
  }

  function hanldeBack() {
    if (step === 1) return;
    setStep((prev) => prev - 1)
  }

  function hanldeSubmit() {
    console.log(`Name: ${form.name}, age: ${form.age}, email: ${form.email}, password: ${form.password}`)
    setForm({ name: "", age: "", email: "", password: "" })
    setStep(1)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  return (
    <>
      {
        (step === 1) ? (
          <div>
            <input name="name" placeholder="Enter your name" type="text" onChange={handleChange} value={form.name} />
            <input name="age" placeholder="Enter your age" type="number" onChange={handleChange} value={form.age} />
            <button onClick={hanldeNext} className="btn btn-primary m-2">Next</button>
          </div>
        ) : (step === 2) ? (
          <div>
            <input name="email" placeholder="Enter your Email" type="email" onChange={handleChange} value={form.email} />
            <input name="password" placeholder="Enter your Password" type="password" onChange={handleChange} value={form.password} />
            <button onClick={hanldeNext} className="btn btn-primary m-2">Next</button>
            <button onClick={hanldeBack} className="btn btn-primary m-2">Back</button>
          </div>
        ) : (
          <div>
            <p>Name: {form.name}</p>
            <p>Age: {form.age}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <button onClick={hanldeSubmit} className="btn btn-primary m-2">Submit</button>
            <button onClick={hanldeBack} className="btn btn-primary m-2">Back</button>
          </div>
        )
      }
    </>
  );
}