import React from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Shelf from "./routes/Shelf";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shelf" element={<Shelf />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
        </Router>
    );
}