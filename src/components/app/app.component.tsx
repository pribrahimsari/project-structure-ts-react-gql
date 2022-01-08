//import React from "react";
import './app.component.css';
import Header from "../header/header.component";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'common/styles';
import About from "pages/about/about.page";
import Home from "../../pages/home/home.page";

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/about" element={About} />
                <Route path="/" element={Home} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
