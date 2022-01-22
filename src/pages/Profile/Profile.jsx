import React from 'react';

// components
import Hero from '../../components/Hero/Hero';

// MUI
import useStyles from './styles';
import { Button } from '@material-ui/core';

// router
import { Link } from 'react-router-dom';

const Profile = () => {
    const classes = useStyles();
    return (
        <div>
            <Hero heroImg="/img/hero-4.jpg" title="My profile" />
            <div className={classes.root}>
                <Button 
                    component={Link} 
                    to="/orders" 
                    variant="contained"
                    color="primary"
                    className={classes.orderBtn}
                >
                    VIEW ORDERS
                </Button>
            </div>
        </div>
    );
};

export default Profile;
