import {ReactNode} from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout =({children}:LayoutProps) => {
    return (
        <div style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1,}}>
        <Box sx={{
            //backgroundColor: '#10141F',
            display: 'flex',
            flexDirection:{
                xs: 'column',
                lg: 'row',
            },
            color: "white",
            padding:3,
            gap: 3,
            overflowY: 'hidden',
            height: '100vh'
        }}>   
            <Sidebar/>
            <Box sx={{width: '100%', overflowY: 'scroll'}}>{children}</Box>
        </Box>
        </div>
    );
}
export default Layout; 