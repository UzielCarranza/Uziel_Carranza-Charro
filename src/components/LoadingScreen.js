import React from 'react';
import Loading from 'react-loading-components';
import "../styles/Loader.css";

export const LoadingScreen = () => {

    return (
        <div className="centered">
            <Loading type='ball_triangle' width={200} height={200} fill='#f44242'/>
        </div>
    )
};
