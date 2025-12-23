import { useState } from "react";

export function FAQItem(){
  const [show, setShow] = useState(false)

  function handleShow(){
    setShow(!show)
  }

  return(
    <>
      <h3>What is React?</h3>
      <button className = "btn btn-outline-dark m-2" onClick={handleShow}>
        {show ? "Hide" : "Show"} Answer
      </button>
      {show && <p>React is a component based library!</p>}
    </>
  );
}