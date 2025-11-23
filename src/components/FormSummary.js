import { useState } from "react";

export function FormSummary() {
  const [form, setForm] = useState({ name: "", email: "", password: "", age: "" })

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const totalFields = Object.keys(form).length;
  const filledFields = Object.values(form).filter(value => value.trim()).length;
  const completionPercentage = ((filledFields / totalFields) * 100).toFixed(2);
  const allFieldValid = Object.values(form).every(value => value.trim()) ? "Yes": "No";

  return (
    <div>
      <form>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Email" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter Password" />
        <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter Name" />
        <input name="age" type="text" value={form.age} onChange={handleChange} placeholder="Enter Age" />
      </form>
      <hr />
      <h5 className="text-decoration-underline">Form Summary</h5>
      <p>Field Filled: {filledFields}</p>
      <p>Completion percentage: {completionPercentage}%</p>
      <p>All fields valid?: {allFieldValid}</p>
    </div>
  );
}