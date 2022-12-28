import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from "react-router-dom";
import Pages from "./Pages";
import {NavBar} from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <NavBar/>
            <Pages/>
        </BrowserRouter>
);
