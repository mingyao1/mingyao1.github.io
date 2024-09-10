import React from 'react';
import { Box } from '@mui/material';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',  // Keep background color white
                borderTop: '1px solid black',  // Add a black line at the top
                padding: 2, 
                paddingX: 4,
                boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Grid container spacing={6}> 
                <Grid item xs={6} md={4}>
                    <Typography variant="body1" gutterBottom>
                    Mingyao Li
                    </Typography>
                    <Typography variant="body1">
                        <Link href="mailto:mingyaol@smu.edu" underline="none" color="inherit">
                            mingyaol@smu.edu
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography variant="body1" display="flex" justifyContent="center" alignItems="center">
                        <LinkedInIcon sx={{ marginRight: 1 }} />
                        <Link href="https://linkedin.com/in/mingyao-l" target="_blank" underline="none" color="inherit">
                            LinkedIn
                        </Link>
                    </Typography>
                    <Typography variant="body1" display="flex" justifyContent="center" alignItems="center">
                        <GitHubIcon sx={{ marginRight: 1 }} />
                        <Link href="https://github.com/your-github-username" target="_blank" underline="none" color="inherit">
                            GitHub
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='body1' color='text.secondary'>
                        B.S. in Computer Science at SMU
                    </Typography>

                </Grid>
            </Grid>
            
            

            
        </Box>
    );
};

export default Footer;


