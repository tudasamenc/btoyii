import React from 'react';
import Layout from '../../Layout';
import { Box, Input, InputAdornment, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { SetStateAction } from 'react';
import SearchIcon from '../../assets/icons/icon-search.svg';
const Home = () => {
    const [search, setSearch] = React.useState<string>('');
    
    const handleSearch = (e: {target: { value: SetStateAction<string> }}) => {
        setSearch(e.target.value);
    };
    return <Layout>
        <Box>   
            <Paper component="form" 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: "default",
                    padding: 1,
                    backgroundColor: '#10141f',
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
            {search === "" ? (
                <Box> 
                    <Box width ="100%">
                        <Typography variant="h5" component="h1" fontWeight={400}> 
                            Top Artists
                            <TopArtistList trendingList={trendingList}/>
                        </Typography>  
                        <Typography variant="h5" component="h1" fontWeight={400}> 
                            Recommended for you
                            <AlbumList recommendList={recommendList}/>
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