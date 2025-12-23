// // ===================================== Exercise -1 =========================

// import LiveInput from "./components/LiveInputs";

// import { Button } from "./components/exercise1/Button";
// import Card from "./components/exercise1/Card";
// import Header from "./components/exercise1/Header";

// function handleAlert() {
//   window.alert("You clicked button")
// }

// function App() {
//   return (
//     <div className="d-flex flex-column align-items-center gap-3">
//       <Button onClick={handleAlert} text={"Click Me"}/>
//       <Card title="This is Title">
//         <p>This is contents under title</p>
//       </Card>
//       <Header heading="NavBar"/>
//     </div>

//   );
// }

// export default App;

// // ===================================== Exercise - 2 =========================

// import { Button } from "./components/exercise2/Button";
// import { Profile } from "./components/exercise2/Profile";


// function App() {
//   return (
//     <Profile name="John Doe"> 
//       <p>Full Stack Developer</p> 
//       <Button text="View Resume" /> 
//     </Profile>
//   )
// }

// export default App;


// // =================================== Exercise -3 =========================

// import Header from "./components/exercise3/Header";
// import Hero from "./components/exercise3/Hero";
// import {Footer} from "./components/exercise3/Footer";

// function App() {
//   return (
//     <div className="d-flex flex-column align-items-center gap-3">
//       <Header heading="NavBar"/>
//       <Hero title = "Hero" subTitle  = "SubTitle" ctaText = "Click Me"/>
//       <Footer/>
//     </div>

//   );
// }

// export default App;


// ================================== Day -2, Exercise -1 (Ex- 4)=========================

// import ClickCounter from "./components/exercise4/ClickCounter";

// function App(){
//   function handleClick(){
//     console.log("counter clicked")
//   }

//   return(
//     <ClickCounter onCounterClick={handleClick}/>
//   );
// }
// export default App;

// ========================== Day -2, Exercise -2 == (Ex-5)======================

// import ChildButton from "./components/exercise5/ChildButton";
// function App(){
//   function handleChildClick(){
//     console.log("Child Button CLicked");
//   }
//   return(
//     <ChildButton onChildClick = {handleChildClick}/>
//   );

// }

// export default App;

// // =================================== Day -2, Exercise -3 =====(Ex-6)====================

// import LiveInputs from "./components/exercise6/LiveInputs";
// function App(){
//   return (
//     <LiveInputs/>
//   );
// }

// export default App;

// =================================== Day -2, Exercise -4 ===(Ex-7)======================

// import SearchContainer from "./components/exercise7/SearchContainer";
// function App(){
//   return (
//     <SearchContainer/>
//   );
// }

// export default App;


// // =================================== Day -3, Exercise -1 ===(Ex-8)======================
// import { StatusMessage } from "./components/exercise8/StatusMessage";
// function App(){
//   return (
//     <div>
//       <StatusMessage isLoggedIn={true}/>
//       <StatusMessage isLoggedIn={false}/>
//     </div>
//   );
// }

// export default App;

// =================================== Day -3, Exercise -2 ====(Ex-9)=====================

// import { UserCard } from "./components/UserCard";
// function App(){
//   const user = {name: "Martin Guptil", role: "Actor"}
//   return (
//     <UserCard user={user}/>
//   );
// }

// export default App;


// =================================== Day -3, Exercise -3 ===(Ex-10)======================
// import { Dashboard } from "./components/exercise10/Dashboard";
// function App(){
//   return <Dashboard msg = {"Welcome to the dashboard!"}/>
// }

// export default App;


// // =================================== Day -3, Exercise -4 ===(Ex-11)======================
// import { Layout } from "./components/exercise11/Layout";
// function App(){
//   return (
//     <Layout 
//     header = {<h2>My Header</h2>}
//     footer = {<footer>This is the footer!</footer>}
//     >
//     <p>This is the main content</p>
//     </Layout>
//   )
// }

// export default App;

// =================================== Day -3, Bonus Exercise =======(Ex-12)==================
// import { Alert } from "./components/exercise12/Alert";
// function App(){
//   return (
//     <div>
//     <Alert type ={"success"}> Saved! </Alert>
//     <Alert type = {"error"}> Failed! </Alert>
//     <Alert type = {"warning"}> Data overwriten! </Alert>
//   </div>
//   )
// }
// export default App;

// // =================================== Week 2, Day -1 , Exercise -1 ====(Ex-13)=====================
// import { Counter } from "./components/exercise13/Counter";
// function App(){
//   return <Counter/>
// }

// export default App;


// =================================== Week 2, Day -1 , Exercise -2 ===(Ex-14)======================
// import LiveInputs  from "./components/exercise14/LiveInputs";
// function App(){
//   return <LiveInputs/>
// }

// export default App;

// =================================== Week 2, Day -1 , Exercise -3 =======(Ex-15)==================

// import { Toggle } from "./components/exercise15/Toggle";

// function App(){
//   return <Toggle/>
// }

// export default App;

// =================================== Week 2, Day -1 , Exercise - 4 =====(Ex-16)====================


// import {FAQItem} from "./components/exercise16/FAQItem";

// function App(){
//   return <FAQItem/>
// }

// export default App;




// =================================== Week 2, Day -1 , Bonus Exercise =====(Ex-17)====================


// import { ToDo } from "./components/exercise17/ToDo";

// function App(){
//   return <ToDo/>
// }

// export default App;


// =================================== Week 2, Day -2 , Exercise - 1 =====(Ex-18)====================

// import { SignupForm } from "./components/exercise18/SignupForm";

// function App(){
//   return <SignupForm/>
// }

// export default App;

// =================================== Week 2, Day -2 , Exercise - 2 =======(Ex-19)==================
// import { MyToDo } from "./components/exercise19/MyToDo";

// function App(){
//   return <MyToDo/>
// }

// export default App;

//  =================================== Week 2, Day -3 , Exercise - 1 =====(ex-20)====================


// import { MultiStepForm } from "./components/exercise20/MultiStepForm";

// function App(){
//   return <MultiStepForm/>
// }

// export default App;
//  =================================== Week 2, Day -3 , Exercise - 2 ====(Ex-21)=====================

// import { Country } from "./components/exercise21/Country";

// function App(){
//   return <Country/>
// }

// export default App;

//  =================================== Week 2, Day -3 , Exercise - 3 =====(Ex-22)====================

// import { Skills } from "./components/exercise22/Skills";

// function App(){
//   return <Skills/>
// }

// export default App;

//  =================================== Week 2, Day -3 , Exercise - 4 =====(Ex-23)====================

// import { Calculator } from "./components/exercise23/Calculator";

// function App(){
//   return <Calculator/>
// }

// export default App;

//  =================================== Week 2, Day -3 , Bonus Exercise  ======(Ex-24)===================

// import { FormSummary } from "./components/exercise24/FormSummary";

// function App(){
//   return <FormSummary/>
// }

// export default App;

//  =================================== Week 2, Day -4 ,Exercise -1  =========================

// import { HideShow } from "./components/useEffect/HideShow";

// function App(){
//   return <HideShow/>
// }
// export default App;

//  =================================== Week 2, Day -4 ,Exercise -2 =========================

// import { StartMousePositionTracker } from "./components/useEffect/StartMousePositionTracker";

// function App(){
//   return <StartMousePositionTracker/>
// }
// export default App;


//  =================================== Week 2, Day -4 ,Exercise -3 =========================

// import { APIFetcher } from "./components/useEffect/APIFetcher";

// function App(){
//   return <APIFetcher/>
// }
// export default App;



//  =================================== Week 2, Day -4 ,Exercise -4 =========================

// import { Timer } from "./components/useEffect/Timer";

// function App() {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// }

// export default App;


//  =================================== Week 2, Day -4 ,Challenge =========================

// import { SmartSearch } from "./components/useEffect/SmartSearch";

// function App() {
//   return (
//       <SmartSearch />
//   );
// }

// export default App;


//  =================================== Week 2, Day -5 , Exercise - 1 =========================

// import { Broken } from "./components/useEffectAdv/Broken";

// function App() {
//   return (
//       <Broken />
//   );
// }

// export default App;


//  =================================== Week 2, Day -5 , Exercise - 2 =========================

// import { LiveClock } from "./components/useEffectAdv/LiveClock";

// function App() {
//   return (
//       <LiveClock />
//   );
// }

// export default App;

//  =================================== Week 2, Day -5 , Exercise - 3 =========================

// import { BadFetcher } from "./components/useEffectAdv/BadFetcher";
// import { useState } from "react";
// function App() {
//   const [input, setInput] = useState("");

//   const handleInput = (e)=>{
//     setInput(e.target.value);
//   }

//   return (
//     <div>
//       <input value ={input} onChange = {handleInput}/>
//       <BadFetcher query={input} />
//     </div>
//   );
// }

// export default App;



//  =================================== Week 2, Day -5 , Exercise - 4 =========================

// import { Subscription } from "./components/useEffectAdv/Subscription";

// function subscribe(callback) {
//   const id = setInterval(() => {
//     callback("New message: " + Math.random());
//   }, 2000);

//   return () => clearInterval(id);
// }

// function App() {
//   return (
//     <div>
//       <p>Latest Message:</p>
//       <Subscription webhook={subscribe} />
//     </div>
//   );
// }

// export default App;



//  =================================== Week 2, Day -5 , Exercise - 5 =========================

// import { CustomHook } from "./components/useEffectAdv/CustomHook";

// function App() {
//   return (
//     <CustomHook />
//   );
// }

// export default App;


// ======================================================


// useEffect Dependency Drill

// useEffect(() => {
//   console.log(count);
// }, []);

// Q: Will it log updated count values later?
// ans: No.
// Q: Why/why not?
// ans: It will not log updated count value later because count is not passed in Dependency Array. 
// Q: How to fix it if we want to log every change?
// ans: If we want to log every change then we have pass the count in Dependency Array.


//  =================================== Week 2, Day - 6 , Exercise - 1, 2 =========================

// import { Demo } from "./components/customHooks/Demo";

// function App() {
//   return (
//     <Demo />
//   );
// }

// export default App;


//  =================================== Week 2, Day- 7 , Mini Project =========================

// import { Dashboard } from "./projects/Dashboard/Dashboard";

// function App() {
//   return (
//     <Dashboard />
//   );
// }

// export default App;

