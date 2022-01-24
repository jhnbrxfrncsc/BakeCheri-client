import React from 'react';

// MUI
import { Box, Paper, Slide, Zoom } from '@material-ui/core';
import useStyles from './loginStyles';

// Formik
import { Formik } from 'formik';
import Schema from '../../schema/loginSchema';

// Form component
import LoginForm from './LoginForm';

// Redux
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/users';

// router
import { useHistory } from 'react-router-dom';

const Login = () => {
    window.scrollTo({ top: 0 })
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Box className={classes.hero}>
            <Slide direction="down" in timeout={2000}>
                <Box
                    className={classes.heroImg}
                >
                    <Zoom
                        in 
                        timeout={1000}
                        style={{ transitionDelay: '2s' }}
                    >
                        <Paper className={classes.paper}>
                            <Formik 
                                initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                onSubmit={
                                    (data, { resetForm }) => {
                                        dispatch(userLogin(data, history));
                                        resetForm({ values: '' });
                                    }
                                }
                                validationSchema = {Schema}
                                component={LoginForm}
                            />
                        </Paper>
                        
                    </Zoom>
                </Box>
            </Slide>
        </Box>
    )
}

export default Login;
