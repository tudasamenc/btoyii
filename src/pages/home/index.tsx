import React from 'react';
import Layout from '../../Layout';
import {Avatar, Grid, Box, Card,CardContent, Input, InputAdornment, Typography } from '@mui/material';
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

    const [trackResults, setTrackResults] = React.useState([]);
    const [albumResults, setAlbumResults] = React.useState([]);
    const [artistResults, setArtistResults] = React.useState([]);

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

        const searchFunction =async() => {
        await client
            .get("/search/"+search,{
                params: {
    
                },
            })
            .then((response) => {
                setTrackResults(response.data.tracks.items);
                setAlbumResults(response.data.albums.items);
                setArtistResults(response.data.artists.items);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });}

    
    
    const handleSearch = (e: {target: { value: SetStateAction<string> }}) => {
        setSearch(e.target.value);
        console.log(e.target.value);
        searchFunction();
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
                <Box sx={{}}> 
                    <Spline scene="https://prod.spline.design/0h4-VH2XWHQruZse/scene.splinecode" />
          
                </Box>
            ) : (
                <Box width="100%">
                    <Typography>Found</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
                        <Box sx={{ gap: 2, width: '33%', height:{xs: "100%", lg: 700},overflowY: 'scroll'}}>
                            <Typography>Tracks</Typography>
                            {trackResults.map((u) => (
                                <Card
                                    key ={u['id']}
                                    elevation={7}
                                    sx={{backgroundColor: 'rgba(32, 32, 32, 0.8)',borderRadius:7,marginBottom: 2}}
                                    >
                                        <CardContent sx={{height:100, display: 'flex', flexDirection: 'row'}}>
                                            <img src={u['album']['images'][0]['url']} alt=""  style={{width:"80px", height:"80px",borderRadius: "8px"}}/>
                                            <Typography variant="h6" component="h1" fontWeight={400} color="white">
                                                {u['name']}
                                            </Typography>
                                        </CardContent>
                                </Card>))}

                        </Box>
                        <Box sx={{ gap: 2, width: '33%', height:{xs: "100%", lg: 700},overflowY: 'scroll'}}>
                            <Typography>Albums</Typography>
                                {albumResults.map((u) => (
                                <Card
                                    key ={u['id']}
                                    elevation={7}
                                    sx={{backgroundColor: 'rgba(32, 32, 32, 0.8)',borderRadius:7,marginBottom: 2}}
                                    >
                                        <CardContent sx={{height:100, display: 'flex', flexDirection: 'row', gap: 2}}>
                                            <a href={"http://127.0.0.1:3000/album?id="+u['id']}  rel="noopener noreferrer">
                                                <img src={u['images'][0]['url']} alt=""  style={{width:"80px", height:"80px",borderRadius: "8px"}}/>
                                            </a>
                                            <Typography variant="h6" component="h1" fontWeight={400} color="white">
                                                {u['name']}
                                            </Typography>
                                        </CardContent>
                                </Card>))}
                        </Box>
                        <Box sx={{ gap: 2, width: '33%', height:{xs: "100%", lg: 700},overflowY: 'scroll'}}>
                            <Typography>Artists</Typography>
                                {artistResults.map((u) => (
                                <Card
                                    key ={u['id']}
                                    elevation={7}
                                    sx={{backgroundColor: 'rgba(32, 32, 32, 0.8)',borderRadius:7,marginBottom: 2}}
                                    >
                                        <CardContent sx={{height:100, display: 'flex', flexDirection: 'row', gap: 2}}>
                                            <a href={"http://127.0.0.1:3000/artist?id="+u['id']}  rel="noopener noreferrer">
                                                <Avatar src={u['images']?.[0]?.['url']} alt=""  style={{width:"80px", height:"80px",borderRadius: "8px"}}/>
                                            </a>
                                            <Typography variant="h6" component="h1" fontWeight={400} color="white">
                                                {u['name']}
                                            </Typography>
                                        </CardContent>
                                </Card>))}
                        </Box>
                    
                    </Box>
                </Box>
            )}
        </Box>
    </Layout>
    }

    export default Home;