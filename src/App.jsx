import Home from "./Home.jsx";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./About.jsx";
import Create from "./Create.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<Create />}/>
      </Route>
    </Routes>
  );
}
