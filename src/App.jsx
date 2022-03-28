import "./App.css";
import Navbar from "./Navbar";
import MainContent from "./Main-content";
import Footer from "./Footer";

function App() {
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
