import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid, CardActions, CardMedia, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

    const projects = [
        {
            title: 'Wish Classification',
            description: ' - Collected and classified 300+ wishes from English Corpora. \n - Made use of a BART model to classify wishes as either personal, specific, or world(communal) with an 84% accuracy. \n - Performed topic modeling on all our complete wishes dataset to find four specific themes of topics',
            image: '',
            link: '',
            skills: ['NLP', 'Python']
        },
        {
            title: 'Ethiquery',
            description: ' - full stack web application built with React and JavaScrip. \n  - Leveraged Artificial Intelligence and OpenAI APIs to answer difficult ethical questions from different stances',
            image: '',
            link: 'https://github.com/mingyao1/ethical-issues',
            skills: ['JavaScript', 'React', 'Node.js']
        },
        {
            title: 'Hack SMU V',
            description: ' - Developed a user-centric AI-driven asset management solution. \n - Collaborated efficiently with four teammates and successfully tackled new challenges in our debut hackathon experience',
            image: 'https://images.app.goo.gl/C7h76kqPUiiW51ng8',
            link: 'https://github.com/mingyao1/flakes',
            skills: ['JavaScript', 'Python']
        }
    ];
    return (
        <Box sx={{ padding: 5, marginX: 10 }}>
            <Typography variant="h3" sx={{textAlign: 'center', textDecoration: 'underline'}} gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={8}>

                {projects.map((project, index) => (
                    <Grid item xs={12} md={6} sx={{display:'flex'}} key={index}>
                        <Card sx={{display:'flex', flexDirection:'column', flexGrow: 1}}>
                            {/* Project Image */}
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}  // Project image
                                alt=''
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography variant="h5" gutterBottom>
                                    {project.title}
                                </Typography>
                                {project.description.split('\n').map((line, i) => (
                                    <Typography key={i} variant="body2" color="text.secondary">
                                        {line}
                                    </Typography>
                                ))}
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', paddingX: 2 }}>
                                <Box>
                                    {project.link && (
                                        <Button display="flex" 
                                        justifyContent="center" 
                                        alignItems="center"
                                        size="small" color="primary" component={Link} href={project.link} target="_blank">
                                            <GitHubIcon color='action'/>
                                            View on GitHub
                                        </Button>
                                    )}
                                </Box>

                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.skills.join(', ')}
                                    </Typography>
                                </Box>
                            </CardActions>
                            
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
};

export default Projects;
