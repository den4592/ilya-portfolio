import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatedRoutes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
