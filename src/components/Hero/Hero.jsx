import React from 'react';

// MUI
import useStyles from './heroStyles';
import { Box, Slide, Typography, Zoom } from '@material-ui/core';

const Hero = ({ heroImg, title }) => {
    const classes = useStyles();
    return (
        <Box 
            className={classes.hero}
            style={{ backgroundImage: `linear-gradient(rgba(243, 229, 245, 0.5), rgba(252, 228, 236, 0.5)),
            url(${heroImg})` }}
        >
            <Slide direction="down" in timeout={3000}>
                <Box
                    className={classes.heroImg}
                >
                    <Zoom 
                        in 
                        timeout={1000}
                        style={{ transitionDelay: '2s' }}
                    >
                        <Typography variant="h1" className={classes.title}>
                            { title }
                        </Typography>
                    </Zoom>
                </Box>
            </Slide>
        </Box>
    )
}

export default Hero;
