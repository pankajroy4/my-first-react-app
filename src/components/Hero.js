import { Button } from "./Button";
function Hero({title, subTitle,ctaText}){
  return(
    <>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <Button onClick={() => console.log("clicked")}>{ctaText}</Button>
    </>
  );
}

export default Hero;