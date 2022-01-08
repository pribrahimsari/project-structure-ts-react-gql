//import React from "react";
import './app.component.css';
import {Header} from "../header/header.component";
import {BrowserRouter} from "react-router-dom";
import 'common/styles';

export const App = () => {
    return(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
}
