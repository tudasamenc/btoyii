import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React from 'react';
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import {Paper, Box, Typography } from "@mui/material";
import Layout from "../../Layout";

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

const User = () => {
    useEffect(() => {
        getUser();
    }, []);
    const [user, setUser] = React.useState([]);
    const getUser =async() => {
        await client
            .get("/me",{
                params: {
 
                },
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });}
    return (
        <Layout>
            <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>
                <Spline scene="https://prod.spline.design/HnmakJJbYWSd6VNZ/scene.splinecode" />
            </div>
            <Box>
                <Box sx={{
                    height:{
                        xs:1,
                        lg:150,
                    }}}>
                        
                        
                </Box>
                {user.map((item: any) => (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:"100%",
                        height:"100%",
                        alignItems: 'center',
                        }}>
                        <Paper elevation={7} sx={{marginBottom: 2, backgroundColor:"rgba(18, 52, 27, 0.82)",borderRadius:7}} >
                            <Typography key={item['id']} variant="h1" fontSize={30}  color="white">
                                {item['display_name']}
                            </Typography>
                        </Paper>
                        <Box sx={{width:300,borderRadius:5}}>
                            <img src={item['images'][0]['url']}  style={{width: 300}} />
                        </Box>
                        <Paper elevation={7} sx={{marginTop: 2, backgroundColor:"rgba(18, 52, 27, 0.82)",borderRadius:7}} >
                            <Typography key={item['id']} variant="h1" fontSize={30} color="white">

                                Followers: {item['followers']['total']}
                            </Typography>
                            <Typography key={item['id']} variant="h1" fontSize={30} color="white">
                                Account tier: {item['product']}
                            </Typography>
                        </Paper>

                    </Box>
                ))}
                
            </Box>
        </Layout>
        
    );
    }

    export default User;