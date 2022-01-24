import React from 'react';

// MUI
import { Box, Paper, Slide, Zoom } from '@material-ui/core';
import useStyles from './registerStyles';

// Formik
import { Formik } from 'formik';
import Schema from '../../schema/registerSchema';

// Form component
import RegisterForm from './RegisterForm';

// Redux
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/actions/users';

// router
import { useHistory } from 'react-router-dom';


const Register = () => {
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
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    password: "",
                                    confirmPassword: ""
                                }}
                                onSubmit={
                                    (data, { resetForm }) => {
                                        const newData = {
                                            firstName: data.firstName,
                                            lastName: data.lastName,
                                            email: data.email,
                                            password: data.password
                                        }
                                        dispatch(userRegister(newData, history));
                                        resetForm({ values: '' });
                                    }
                                }
                                validationSchema = {Schema}
                                component={RegisterForm}
                            />
                        </Paper>
                    </Zoom>
                </Box>
            </Slide>
        </Box>
    )
}

export default Register;
