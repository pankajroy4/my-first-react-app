import { useState } from "react";
import { ComponentMountLogger } from "./ComponentMountLogger";

export function HideShow() {
  const [hideShow, setHideShow] = useState(false)

  function handleClick() {
    setHideShow(prev => !prev);
  }

  return (
    <div>
      <button onClick={handleClick}>{hideShow ? "Hide" : "Show"}</button>
      {hideShow && <ComponentMountLogger />}
    </div>
  );
}