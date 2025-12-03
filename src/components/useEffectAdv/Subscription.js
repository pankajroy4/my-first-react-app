import { useEffect, useState } from "react";

function subscribe(callback) {
  const id = setInterval(() => {
    callback("New message: " + Math.random());
  }, 2000);

  return () => clearInterval(id);
}

export function Subscription() {
  
}
