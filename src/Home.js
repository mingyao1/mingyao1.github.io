import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Home = () => {
    return (
        <div>
            <About />
            <Projects />
            <Box sx={{marginX: 10, marginY: 5}}>
                <Typography variant='h3' sx={{textAlign: 'center'}}>
                    Experience
                </Typography>
                <Typography sx={{padding: 5}} component={Link} to={'/experience'}>
                    Resume summary
                </Typography>
            </Box>
            
        </div>
    );
};

export default Home;