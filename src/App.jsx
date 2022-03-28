import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import MainContent from "./Main-content";
import Footer from "./Footer";
import HamBtn from "./HamBtn";
function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
