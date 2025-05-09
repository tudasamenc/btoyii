import { Box, Typography } from "@mui/material";
import {Paper} from "@mui/material";
import { Link } from "react-router-dom";
import { link } from "fs";
import React from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/icon-nav-home.svg";
import TopArtistsIcon from "../../assets/icons/icon-nav-tv-series.svg";
const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/",
    },
    {
        name: "Top Artists",
        icon: TopArtistsIcon,
        link: "/topartists",
    },
    {
        name: "User",
        icon: TopArtistsIcon,
        link: "/user",
    },
];

const Sidebar = () => {
    const { pathname } = useLocation();
    return <Box
        sx={{
            backgroundColor: '#161d2f',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection:{
                xs: 'row',
                lg: 'column',
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            width:{
                sm: '100%',
                lg: 200,
            },
        }}>
            <Box sx={{ display: 'flex',
                 flexDirection: {
                    xs: 'row',
                    lg: 'column',
                },
                gap: 5,
                alignItems:{
                    xs: 'center',
                    lg: 'start',
                },
                width: '100%',
                 
                }}
                >
                    <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
                         <Typography
                            variant="h5"
                            component="h1"
                            my={2}
                            fontWeight={400}
                            fontSize={18}
                        >
                            Spotify Toy
                        </Typography>
                    </Paper>
                        <Box sx={{
                            py:{
                                xs: "0px",
                                lg: "16px",
                            },
                            display: 'flex',
                            flexDirection: {
                                xs: 'row',
                                lg: 'column',
                            },
                            gap: 4,
                        }}>
                            {navLinks.map((item) => (
                                <Link  
                                    key={item.name}
                                    to={item.link}
                                    
                                    style={{
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        color:"white",
                                        textDecoration: 'none'
                                    }}>
                                        <img src={item.icon}
                                            alt={item.name}
                                            style={{
                                                width: "18px",
                                                filter: `${pathname === item.link
                                                     ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                                                     : "invert(84%)"
                                                    }`,
                                                }}
                                        />
                                                  
                                        <Paper sx={{ display: { md: 'block', sm: 'none' } }}>
                                            <Typography>{item.name}</Typography>
                                        </Paper>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                </Box>
        </Box>
};
export default Sidebar;