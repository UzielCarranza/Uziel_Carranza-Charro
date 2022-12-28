import {Routes, Route} from "react-router-dom";
import React from "react";
import App from "./App";
import {FrontEnd} from "./components/FrontEnd";
import {BackEnd} from "./components/BackEnd";
import {FullStack} from "./components/FullStack";



export default function Pages() {

    return (
        <div>
            <Routes>
                <Route path="/home" element={<App/> }/>
                <Route path="/front-end" element={<FrontEnd/>}/>
                <Route path="/back-end" element={<BackEnd/>}/>
                <Route path="/full-stack" element={<FullStack/>}/>

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