import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import HeaderSample from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
    return <div className="">
        <HeaderSample />
        <h1>Welcome to React Apps Script Project!</h1>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </div>;
}

export default App;