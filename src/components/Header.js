import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { textTransform } from '@mui/system';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
    return (
        <AppBar position="static" color=''>
            <Toolbar>
                {/* Your name as a clickable Home button */}
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">
                        <Typography variant="h6" component="span" sx={{textTransform:'capitalize'}}>
                            Mingyao Li
                        </Typography>
                    </Button>
                </Box>
                
                <Button color="inherit" component={Link} to="/projects">
                    Projects
                </Button>
                <Button color="inherit" component={Link} to="/experience">
                    Experience
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

