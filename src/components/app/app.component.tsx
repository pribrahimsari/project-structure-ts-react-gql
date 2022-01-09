//import React from "react";
import './app.component.css';
import Header from "../header/header.component";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'common/styles';
import About from "pages/about/about.page";
import Home from "pages/home/home.page";
import {ApolloProvider} from "@apollo/client";
import client from "common/apollo-client";

const App = () => {
    return(
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
