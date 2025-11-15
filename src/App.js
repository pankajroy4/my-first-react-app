// // ===================================== Exercise -1 ============================================

// import { Button } from "./components/Button";
// import Card from "./components/Card";
// import Header from "./components/Header";

// function Alert() {
//   window.alert("You clicked button")
// }

// function App() {
//   return (
//     <div className="d-flex flex-column align-items-center gap-3">
//       <Button onClick={Alert}>Click Me </Button>
//       <Card title="This is Title">
//         <p>This is contents under title</p>
//       </Card>
//       <Header heading="NavBar"/>
//     </div>

//   );
// }

// export default App;


// =================================== Exercise -2 ==================================================

import Header from "./components/Header";
import Hero from "./components/Hero";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <Header heading="NavBar"/>
      <Hero title = "Hero" subTitle  = "SubTitle" ctaText = "Click Me"/>
      <Footer/>
    </div>

  );
}

export default App;

