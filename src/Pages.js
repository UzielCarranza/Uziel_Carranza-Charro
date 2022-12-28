import {Routes, Route} from "react-router-dom";
import React from "react";
import {Projects} from "./components/Projects";
import App from "./App";
import {FrontEnd} from "./components/FrontEnd";



export default function Pages() {

    return (
        <div>
            <Routes>
                <Route path="/home" element={<App/> }/>
                <Route path="/front-end" element={<FrontEnd/>}/>

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}