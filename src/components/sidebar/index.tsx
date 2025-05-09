import { Box, Typography } from "@mui/material";
import {Paper} from "@mui/material";
import { Link } from "react-router-dom";
import { link } from "fs";
import React from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Top Artists",
        link: "/topartists",
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
  ]                       <Typography
                            variant="h5"
                            component="h1"
                            my={2}
                            fontWeight={400}
                            fontSize={18}
                        >
                            Music App
                        </Typography>
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
                                    to={item.link}
                                    key={item.name}
                                    style={{
                                        textDecoration: 'none',
                                        color: pathname === link.link ? '#1DB954' : '#fff',
                                        fontWeight: pathname === link.link ? 'bold' : 'normal',
                                    }}
                                >
                                    <Box>
                                        //imge
                                        <Paper sx={{ display: { md: 'none', sm: 'block' } }}>
                                            <Typography>{item.name}</Typography>
                                        </Paper>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Paper>
                </Box>
        </Box>
};
export default Sidebar;