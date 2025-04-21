import Home from "./home";
import Nav from "./nav";
import Nav2 from "./Nav2";
import Footer from "./footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Nav2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
