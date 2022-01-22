import React, { useState } from 'react';
import { 
    Box,
    Grow,
    Slide,
    Typography
} from '@material-ui/core';
import useStyles from './servicesStyles';
import serviceData from '../../assets/data/serviceData';


const Services = () => {
    const classes = useStyles();
    const [animation, setAnimation] = useState(false);
    
    const handleAnimation = () => {
        const scrollDown = window.scrollY;
        if(scrollDown >= 200){
            setAnimation(true);
        } 
    };

    window.addEventListener('scroll', handleAnimation);
    return (
        <Box
            m={1}
            p={3}
            className={classes.root}
        >
            <Slide direction="left" in={animation} timeout={3000}>
                <Typography
                    align="center"
                    variant="h4" 
                    color="primary"
                    className={classes.font1}
                >
                    our <span className={classes.title}>Services</span>
                </Typography>
            </Slide>
            <Slide direction="right" in={animation} timeout={3000}>
                <Box
                    className={classes.divider}
                />
            </Slide>
            <Box 
                className={ classes.gridContainer }
            >
            {
                serviceData.map((data, index) => {
                    return(
                        <Grow 
                            in={animation} 
                            timeout={1000} 
                            key={index}
                            style={{ 
                                transitionDelay:  window.innerWidth >= 800 ? '1s' : `${index+1}s`
                            }}
                        >
                            <Box 
                                className={classes.card}
                            >
                                <Box
                                    className={classes.serviceImg}
                                    style={{ backgroundImage: `url(${data.image})` }}
                                />
                                <Box
                                    className={classes.rightSide}
                                >
                                    <Typography 
                                        variant="h4" 
                                        color="primary"
                                        className={classes.font2}
                                        style={{ margin: 0 }}
                                    >
                                        { data.name }
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        color="secondary"
                                        className={classes.font3}
                                        style={{ color: "#AEAEAE" }}
                                    >
                                        { data.description }
                                    </Typography>
                                </Box>
                            </Box>
                        </Grow>
                    )
                })
            }
            </Box> 
        </Box>
    )
}

export default Services;