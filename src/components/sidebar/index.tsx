import { Box, Typography } from "@mui/material";
import {Paper} from "@mui/material";
import { Link } from "react-router-dom";
import { link } from "fs";
import React from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/icon-nav-home.svg";
import TopArtistsIcon from "../../assets/icons/icon-topartists.svg";
import SpotifyLogo from "../../assets/Spotify Custom Logo.png";
import UserIcon from "../../assets/icons/icon-user.svg";
import Spline from "@splinetool/react-spline";
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
        icon: UserIcon,
        link: "/user",
    }
];

const Sidebar = () => {
    const { pathname } = useLocation();
    return <Box

        sx={{
            backgroundColor: 'rgba(33, 34, 37, 0.95)',
            padding: 2,
            borderRadius: 7,
            gap: 200,
            display: 'flex',
            flexDirection:{
                xs: 'row',
                lg: 'column',
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            width:{
                sm: '100%',
                lg: 180,
            },
            height: {
                xs: 100,
                lg: 510,
            },
            marginTop:{
                xs: 0,
                lg: 0,
            }
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
                    <Box sx={{ display: { xs: 'none', sm: 'block' },postiion:{xs: "relative", lg: "absolute"}, left:{xs:90,lg:555}, top:{xs:0, lg:4},color: "white"  ,alignItems: 'center',leftMargin: 0, width:{sx:300, lg:180}, zIndex:2}}>
                        <Box sx={{height:{xs:0,lg:40}}}>
                            </Box>
                        <img src={SpotifyLogo} style={{width:"100%",objectFit: 'cover'}}/>
                        
                         {/*<Typography
                            variant="h5"
                            component="h1"
                            my={2}
                            fontFamily={"sans-serif"}
                            fontWeight={600}
                            fontSize={25}
                            color="black"
                        >
                            Spotify Toy
                        </Typography>*/}
                        
                    </Box>

                            <Box sx={{position:{
                                xs: "relative",
                                lg: "absolute",
                            }, top: {
                                xs: 0,
                                lg: 50,
                            }, left: {
                                xs:0,
                                lg:30,
                            }, width:{
                                xs: 200,
                                lg: 200,
                            } , height: {
                                xs: 200,
                                lg: 300,
                            }, zIndex: 0}} style={{}}>
                            <Spline scene="https://prod.spline.design/MOre3FbS7fPsGGpV/scene.splinecode" />
                            </Box>
                        <Box sx={{
                            width: {
                                xs:0,
                                lg: 200,
                            },
                            height: {
                                xs: 0,
                                lg: 20,
                            },
                        }}>
                            </Box>
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
                            zIndex: 2,
                        }}>
                            {navLinks.map((item) => (
                                <Link  
                                    key={item.name}
                                    to={item.link}
                                    
                                    style={{
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Paper elevation={4} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: 'rgb(11, 59, 46)',
                                        gap: 2,
                                        color:"white",
                                        width:{
                                            xs: '100%',
                                            lg: 175,
                                        },
                                        height: {
                                            xs: '100%',
                                            lg: 50,
                                        },
                                        borderRadius: 7,
                                        textDecoration: 'none',
                                        marginLeft:{
                                            xs: 0,
                                            lg: 0,
                                        }
                                    }}>
                                        <img src={item.icon}
                                            alt={item.name}
                                            style={{
                                                width: "30px",
                                                filter: `${pathname === item.link
                                                     ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                                                     : "invert(84%)"
                                                    }`,
                                                }}
                                        />

                                        <Paper elevation={0} sx={{ display: { md: 'block', sm: 'none' ,backgroundColor: 'transparent',color: "white"} }}>
                                            <Typography sx={{display:{fontSize:21}}}>{item.name}</Typography>
                                        </Paper>
                                    </Paper>
                                </Link>
                            ))}
                        </Box>
                </Box>
        </Box>
};
export default Sidebar;