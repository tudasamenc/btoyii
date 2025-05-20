import React from 'react';
import Spline from "@splinetool/react-spline";
import { Box } from "@mui/material";

const Welcome = () => {
    return (
                        <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>
            <a href="http://127.0.0.1:3000" target="_blank" rel="noopener noreferrer">
                <Spline scene="https://prod.spline.design/iOUvZCm4DxPxit6P/scene.splinecode" />
            </a>
            
        </div>
    );
    }

    export default Welcome;