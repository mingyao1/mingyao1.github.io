import React from 'react';
import { Container, Typography, Box, Avatar, Link, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { blue } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            padding: 4,
            backgroundImage: `url(${require('../media/background.jpeg')})`,  // Add your image URL here
            backgroundSize: 'cover',  // Cover the entire section
            backgroundPosition: 'center',  // Center the image
            backgroundRepeat: 'no-repeat',  // Prevent image from repeating
            backgroundAttachment: 'fixed',
            minHeight: '50vh',  // Ensure the section takes up the full viewport height
            color: 'white',  
        }}>
            <Grid container spacing={4}>

            <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0',
                            padding: 4,
                            borderRadius: 5,
                        }}
                    >
                        {/* Profile Picture */}
                        <Avatar
                            alt=""
                            src={require('../media/profile.jpeg')}
                            sx={{ width: 150, height: 150, marginBottom: 2 }}
                        />
                        

                        {/* Contact Links */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <Typography underline="none" display="flex" 
                                justifyContent="center" 
                                alignItems="center" 
                                sx={{ color: theme.palette.primary.main, margin: 1 }}>
                                <MailIcon color='action'/> 
                                mingyaol@smu.edu
                            </Typography>
                            <Link display="flex" 
                                justifyContent="center" 
                                alignItems="center" 
                                href="https://www.linkedin.com/in/mingyao-l/" target="_blank" underline="none" sx={{ margin: 1 }}>
                                <LinkedInIcon color='action' />
                                LinkedIn
                            </Link>
                            <Link display="flex" 
                                justifyContent="center" 
                                alignItems="center" href="https://github.com/mingyao1" target="_blank" underline="none" sx={{ margin: 1 }}>
                                <GitHubIcon color='action'/>
                                GitHub
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                {/* About Section */}
                <Grid item xs={12} md={8}>
                    <Typography variant='h3'>
                        Mingyao Li
                    </Typography>
                    <Typography variant="body1" sx={{marginTop: 5}}>
                        I am a student at SMU Lyle School of Engineering pursuing a major in Computer Science. 
                        I am a Distinguished Scholar as well as a part of the University Honors Program. 
                        I also plan on double majoring in Data Science. 
                        I am proficient in various programming languages including C++, java, python, and javascript. 
                        I have experience in React, node js, flask, and MySQL. 
                        I am a hardworking and driven student aspiring to further build and apply my knowledge in my future education and working experiences.            
                    </Typography>
                </Grid>
                
            </Grid>
        </Box>
        
    );
};

export default About;

