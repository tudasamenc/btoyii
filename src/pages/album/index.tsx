import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Layout from '../../Layout';
import {Card, CardContent, Box, Paper, InputBase, Typography } from '@mui/material';
import Spline from '@splinetool/react-spline';

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

const Album = () => {
        let params = new URLSearchParams(document.location.search);
        const ArtistID = params.get("id");
    
            useEffect(() => {
                getTopArtists();
            }, []);
            const [album, setAlbum] = React.useState([]);
            const getTopArtists =async() => {
                await client
                    .get("/albums/"+params.get("id"),{
                        params: {
            
                        },
                    })
                    .then((response) => {
                        setAlbum(response.data); 
                    })
                    .catch((error) => {
                        console.error("There was an error!", error);
                    });}
        
            
    return (
        <Layout>
            <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>
                    <Spline scene="https://prod.spline.design/Ei7lYv16uJ87W9-5/scene.splinecode" />
                </div>
                {album.map((item: any) => (
                    <Box>
                        <Typography key={item['id']} variant="h1" fontSize={30} >
                            {item['name']}
                        </Typography>
                        <img src={item['images'][0]['url']}  style={{width: 300}} />
                        <Box sx={{height:{xs:"100%", lg:500},overflowY:"scroll"}}>
                            {item['tracks']['items'].map((u: any) => (
                                <Card elevation={7} sx={{backgroundColor:"rgba(27, 27, 27, 0.82)",borderRadius:7}} >
                                    <CardContent sx={{height:100, display:"flex", flexDirection:"row", margin:0, padding:0}}>
                                    <img src={item['images'][0]['url']}  style={{width: 100, height:100}} />
                                    <Typography key={u['id']} variant="h1" fontSize={20} color='white'>
                                        {u['name']}
                                    </Typography>
                                    
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                ))}
        </Layout>
    );
    }

    export default Album;