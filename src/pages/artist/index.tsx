import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Layout';
import Spline from '@splinetool/react-spline';
import { Box, Typography } from '@mui/material';
import { Grid,Card,Paper, CardContent } from '@mui/material';

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

const Artist = () => {
    let params = new URLSearchParams(document.location.search);
    const ArtistID = params.get("id");

        useEffect(() => {
            getTopArtists();
        }, []);
        const [artistProfile, setArtistProfile] = React.useState([]);
        const [artistAlbums, setArtistAlbums] = React.useState([]);
        const [artistSongs, setArtistSongs] = React.useState([]);
        const getTopArtists =async() => {
            await client
                .get("/artists/"+params.get("id"),{
                    params: {
        
                    },
                })
                .then((response) => {
                    setArtistProfile(response.data.profile);
                    setArtistAlbums(response.data.albums.items);
                    setArtistSongs(response.data.songs.tracks);
                    
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });}
    
        
        
    return (
        <div>
            <Layout>
                <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>
                    <Spline scene="https://prod.spline.design/4wqDbcjo09aMuCdZ/scene.splinecode" />
                </div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width:"100%",
                    height:"100%",
                }}>
                    {artistProfile.map((u) => (
                        <div key ={u['id']}>
                            <h1>{u['name']}</h1>
                            <img src={u['images'][0]['url']}  width={200} height={200}/>
                            <Box>
                                <h3>Followers: {u['followers']['total']}</h3>
                                <h3>Genres: {u['genres']} </h3>
                                <h3>Popularity: {u['popularity']}</h3>

                            </Box>
                        </div>
                    ))}
                    <Box sx={{
                        width:{
                            xs: "100%",
                            lg: "50%",
                        }
                    , height:{
                        xs: "100%",
                        lg: 400,
                    }
                    , overflowX: 'scroll',
                    overflowY: 'scroll',
                    }}>
                    {artistSongs.map((u) => (
                        <Paper key ={u['id']} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'rgba(32, 32, 32, 0.8)',
                        }}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'row',

                                
                            }}
                            elevation={7}
                            style={{backgroundColor: 'transparent'}}
                            >
                                <CardContent style={{
                                    padding: 0,
                                    position: 'relative',
                                    overflowX: 'scroll',
                                    overflowY: 'scroll',
                                    display: 'flex',
                                    
                                }}
                                >
                                <Grid container spacing={3} sx={{
                                    height: 100,
                                }}>
                                    
                                    <img src={u['album']['images'][0]['url']} width={100} height={100}/>

                                        <Typography variant="h6" component="h1" fontWeight={400} color="white" justifyContent={"center"} style={{
                                            width: 400,
                                        }}>
                                            {u['name']}
                                        </Typography>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Paper>

                    ))}
                    </Box>
                    <Box style={{
                        position : 'absolute',
                        top: "10%",
                        left: "60%",
                    }}sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:{
                            xs: "100%",
                            lg: "40%",
                        
                        },
                        height:{
                            xs: "100%",
                            lg: 750,
                        },
                        overflowY: 'scroll',
                        borderRadius: 4,
                    }}>
                        <Box>
                        {artistAlbums.map((u) => (
                            <Card key ={u['id']} sx={{
                                height: 120,
                                borderRadius: 4,
                                backgroundColor: 'rgba(32, 32, 32, 0.8)',
                                display: 'flex',
                                flexDirection: 'row',
                                
                            }}>
                                
                                <CardContent style={{
                                    padding: 0,
                                    position: 'relative',
                                    overflowX: 'scroll',
                                    overflowY: 'scroll',
                                    display: 'flex',
                                    
                                }}>
                                    <a href={"http://127.0.0.1:3000/album?id="+u['id']}  rel="noopener noreferrer">
                                        <img src={u['images'][0]['url']} width={100} height={100}/>
                                    </a>
                                        <Typography variant="h6" component="h1" fontWeight={400} color="white" justifyContent={"center"} style={{
                                            width: 400,
                                        }}>
                                            {u['name']}
                                        </Typography>
                                </CardContent>
                                
                            </Card>

                        ))}
                        </Box>
                        </Box>
                    </Box>
            </Layout>
        </div>
        
    );
    }

    export default Artist;