import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import HeaderSample from "./components/Header";
import Home from "./components/Home";

function App() {
    return <div className="">
        <HeaderSample />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </div>;
}

export default App;