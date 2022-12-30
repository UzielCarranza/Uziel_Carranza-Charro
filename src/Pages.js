import {Routes, Route} from "react-router-dom";
import React from "react";
import App from "./App";
import {FrontEnd} from "./components/FrontEnd";
import {BackEnd} from "./components/BackEnd";
import {FullStack} from "./components/FullStack";
import {TechStack} from "./components/TechStack";
import {useEffect, useState} from "react";
import {LoadingScreen} from "./components/LoadingScreen";


export default function Pages() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Wait for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={isLoading ? <LoadingScreen/> : <App/>}/>
                <Route path="/front-end" element={isLoading ? <LoadingScreen/> : <FrontEnd/>}/>
                <Route path="/back-end" element={isLoading ? <LoadingScreen/> : <BackEnd/>}/>
                <Route path="/full-stack" element={isLoading ? <LoadingScreen/> : <FullStack/>}/>
                <Route path="/tech-stack" element={isLoading ? <LoadingScreen/> : <TechStack/>}/>

                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}