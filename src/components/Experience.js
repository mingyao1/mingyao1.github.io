import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => {
    return (
        <Box sx={{ paddingX: 4, paddingY: 2 }}>
            <Typography variant="h3" gutterBottom>
                Education
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Southern Methodist University, Lyle School of Engineering – Dallas, TX"
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.secondary">
                                    Bachelor of Science in Computer Science (Aug 2021 – May 2025)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    SMU Distinguished Scholar (Merit-based scholarship)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    Courses taken: Data Structures, Algorithms, Database Concepts, Software Engineering,
                                    Operating Systems, Machine Learning, Natural Language Processing, Artificial Intelligence,
                                    Data Mining
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            </List>

            <Typography variant="h3" gutterBottom>
                Experience
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="SMU Lyle School of Engineering – Dallas, TX"
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.secondary">
                                    Computer Science Research Assistant (Jan 2024 – Present)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Engaged in full-stack development of an AI-powered platform used in a medical research project.
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Completed tasks contributing to key features like profile management, password settings, and a messaging system using TypeScript and Java Play.
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Collaborated in weekly code reviews to resolve critical bugs and improve performance.
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="SMU Lyle School of Engineering – Dallas, TX"
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.secondary">
                                    Computer Science Teaching Assistant (Aug 2023 – Dec 2023)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Held weekly office hours, improving student performance in key areas by providing targeted assistance.
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Designed and graded quizzes and exams, resulting in a 20% improvement in the class average.
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Wondershare Technology – Changsha, Hunan, China"
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.secondary">
                                    Software Test Engineer Intern (June 2023 – July 2023)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Executed and devised tests for generative AI software across diverse platforms, ensuring robust functionality.
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Collaborated with cross-functional teams and assisted in designing automated test procedures to improve productivity.
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Recovery Soldiers Ministries – Elizabethton, TN"
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.secondary">
                                    IT Support Assistant (Jan 2023 – May 2023)
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Provided remote support for software, hardware, and operating system installations and configurations.
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    - Optimized the website using Content Management Systems (CMS) to improve user experience and increase productivity by over 50%.
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    );
};

export default Experience;
