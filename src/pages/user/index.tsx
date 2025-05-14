import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React from 'react';
import Spline from '@splinetool/react-spline';
import { get } from "http";
import { useEffect } from "react";

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

window.onload = (): void => {
  console.log('The page is fully loaded.');
};

const User = () => {
    useEffect(() => {
        getUser();
    }, []);
    const [user, setUser] = React.useState([]);
    const getUser =async() => {
        await client
            .get("/me/top/artists",{
                params: {
 
                },
            })
            .then((response) => {
                setUser(response.data.items);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });}
    return (

        <div>
            <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>
            <Spline  scene="https://prod.spline.design/MWCSaVCZhmLyO0yh/scene.splinecode" />
            </div>
        <h1>User</h1>
        <p>Welcome to your user page</p>
        <Button variant="contained" onClick={getUser} >
            Get User 
        </Button>
        <div>
            {user.map((u) => (
                <Card
                    //key ={u['id']}
                    elevation={7}
                    style={{backgroundColor: 'transparent'}}
                    >
                        <CardContent style={{
                            padding: 0,
                            position: 'relative',
                            overflowX: 'scroll',
                            display: 'flex',
                        }}
                        >
                            Artist
                            <a href={"http://127.0.0.1:3000/artist/"+u['id']} target="_blank" rel="noopener noreferrer">
                                {u['name']}
                            </a>
                            <img src={u['images'][0]['url']} alt="artist" width={100} height={100}/>
                        </CardContent>
                    </Card>
            ))}
        </div>
        </div>
        
    );
    }

    export default User;