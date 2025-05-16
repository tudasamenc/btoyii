import React from 'react';
import Layout from '../../Layout';
import {Grid, Box, Card,CardContent, Input, InputAdornment, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { SetStateAction } from 'react';
import SearchIcon from '../../assets/icons/icon-search.svg';
import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8080",
    withCredentials: true,
    maxRedirects: 0
    
});

const Home = () => {
    useEffect(() => {
        getTopArtists();
    }, []);
    const [topArtists, setTopArtists] = React.useState([]);
    const [search, setSearch] = React.useState<string>('');

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

    
    
    const handleSearch = (e: {target: { value: SetStateAction<string> }}) => {
        setSearch(e.target.value);
    };
    return <Layout>

        <Box>   
            <Paper elevation={7} component="form" 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: "20px",
                    padding: 1,
                    backgroundColor: 'rgba(29, 29, 29, 0.96)',
                    border: 'none'
                }}> 
                <InputBase
                    placeholder="Search"
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: 'white',
                        padding: 1,
                    }}
                    value={search}
                    onChange={handleSearch}
                    startAdornment={
                        <InputAdornment position="start">
                            <img src={SearchIcon} alt="search icon" width={20} height={20}/>
                        </InputAdornment>
                    }
                />

            </Paper>
        </Box>
        <Box py={2} px ={4}>
            <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1}}>

                <Spline scene="https://prod.spline.design/skOPtz0cjRWQpB11/scene.splinecode" />
                
            </div>
            {search === "" ? (
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
            ) : (
                <Box width="100%">
                    <Typography>Found</Typography>
                </Box>
            )}
        </Box>
    </Layout>;
    }

    export default Home;