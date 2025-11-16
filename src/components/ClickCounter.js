import { Button } from "./Button";
function ClickCounter({onCounterClick}){
  return (
    <Button onClick={onCounterClick}>Click Me</Button>
  );
}
export default ClickCounter;