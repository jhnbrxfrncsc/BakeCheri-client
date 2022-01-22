import React from 'react';

// Formik
import { Form as Forms } from 'formik';

// Material UI
import useStyles from './registerStyles';
import {
    Button,
    Grid,
    Typography
} from '@material-ui/core';

// components
import Textfield from '../../components/FormsUI/Textfield';

// router
import { Link } from 'react-router-dom';

const Form = ({ handleSubmit }) => {
    const classes = useStyles();
    return (
        <Forms 
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.form}
            >
            <Grid 
                container 
                spacing={2} 
                className={classes.formWrapper}
            >
                <Grid item xs={12}>
                    <Typography 
                        variant="h5"
                        color="primary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        Sign Up
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="firstName"
                        label="First Name"
                        fullWidth
                    />
                    
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="lastName"
                        label="Last Name"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="email"
                        label="Email"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="password"
                        type="password"
                        label="Password"
                        fullWidth
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <Textfield 
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                        style={{ marginTop: "25px" }}
                    >
                        Sign Up
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        style={{ padding: "25px", textAlign: "center"}}
                    >
                        Already have an account? Click
                        <Link 
                            to="/login"
                            className={classes.link}
                        >
                            here
                        to login
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Forms>
    )
}

export default Form;
