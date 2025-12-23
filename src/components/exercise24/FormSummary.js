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

/*
  Object is a built-in global object provided by the JavaScript language.

  Where does Object come from?
    In JavaScript, some things are available globally, without importing anything:
      Object, Array, String, Number, Boolean, Math, JSON, Date

    So when you write:
      Object.keys(form)
      Object.values(form)
      You are using JavaScript's built-in Object utility, not something React gives you.
      React is not involved here at all.

  What exactly is Object?
    Think of Object as a toolbox for working with objects.
    Your form is a plain JS object:

    const form = { name: "", email: "", password: "", age: ""};
    JavaScript gives you helper methods via Object.

  Breaking down each usage:
  1:Object.keys(form)
    Returns all keys (property names)
    ["name", "email", "password", "age"]

    That is why this works:
      const totalFields = Object.keys(form).length; => 4

  2:Object.values(form)
    Object.values(form)
    Returns all values: ["", "", "", ""]
    After typing: ["pankaj", "test@gmail.com", "1234", ""]
*/