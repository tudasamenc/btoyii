import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import React from 'react';
import Spline from '@splinetool/react-spline';
import { useEffect } from "react";
import { Grid,Box, Typography } from "@mui/material";
import Layout from "../../Layout";

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

const TopArtists = () => {
        useEffect(() => {
            getTopArtists();
        }, []);
        const [topArtists, setTopArtists] = React.useState([]);
    
        const getTopArtists =async() => {
            await client
                .get("/me/top/artists",{
                    params: {
        
                    },
                })
                .then((response) => {
                    setTopArtists(response.data.items);
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });}
    return (
        <Layout>


        <Box py={2} px ={4}>
            <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>

                <Spline scene="https://prod.spline.design/skOPtz0cjRWQpB11/scene.splinecode" />
                
            </div>
                <Box> 
                    <Box width ="100%">
                        <Typography variant="h5" component="h1" fontWeight={400}> 
                            Top Artists
                            {/*<TopArtistList trendingList={trendingList}/>*/}
                        </Typography> 
                        <Grid container spacing={2} >
                            {topArtists.map((u) => (
                                <Card
                                    //key ={u['id']}
                                    elevation={7}
                                    style={{backgroundColor: 'transparent'}}
                                    >
                                    <a href={"http://127.0.0.1:3000/artist?id="+u['id']}  rel="noopener noreferrer">
                                        <CardContent style={{
                                            padding: 0,
                                            position: 'relative',
                                            overflowX: 'scroll',
                                            display: 'flex',
                                        }}
                                        >
                                            <img src={u['images'][0]['url']} alt=""  style={{width:"180px", height:"180px",borderRadius: "8px"}}/>

                                        </CardContent>
                                            </a>
                                            <Box sx={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Typography variant="h6" component="h1" fontWeight={400} color="white" justifyContent={"center"}>
                                                    {u['name']}
                                                </Typography>

                                            </Box>
                                    </Card>
                            ))}
                        </Grid>
                        <Typography variant="h5" component="h1" fontWeight={400}> 
                            Recommended for you
                            {/*<AlbumList recommendList={recommendList}/>*/}
                        </Typography>  

                    </Box>
                </Box>
                <Box width="100%">
                    <Typography>Found</Typography>
                </Box>
            
        </Box>
    </Layout>
    );
    }

    export default TopArtists;