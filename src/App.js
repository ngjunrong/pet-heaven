import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Release from "./components/Release";
import Listings from "./components/Listings";
import Adopt from "./components/Adopt";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listings" element={<Listings />}></Route>
            <Route path="/adopt" element={<Adopt />}></Route>
            <Route path="/release" element={<Release />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
