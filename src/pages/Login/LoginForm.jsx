import React, { useState, useEffect } from 'react';

// Formik
import { Form as Forms } from 'formik';

// sweet alert
import Swal from 'sweetalert2';

// Material UI
import useStyles from './loginStyles';
import {
    Backdrop,
    Button,
    CircularProgress,
    Grid,
    Typography
} from '@material-ui/core';

// components
import Textfield from '../../components/FormsUI/Textfield';

// router
import { Link, useHistory } from 'react-router-dom';

const Form = ({ handleSubmit }) => {
    const classes = useStyles();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const message = localStorage.getItem("message");
    const isAdmin = localStorage.getItem("isAdmin");
    const isSuccess = localStorage.getItem("isSuccess");


    const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    useEffect(() => {
        if(isSuccess === "true"){
            setLoading(true);
            Toast.fire({
                icon: 'success',
                title: "Login Successful"
            })
            setLoading(false);
            setTimeout(() => {
                if(isAdmin === "true"){
                    localStorage.removeItem("isSuccess")
                    localStorage.removeItem("message")
                    history.push("/admin/profile")
                    history.go(0)
                } else {
                    localStorage.removeItem("isSuccess")
                    localStorage.removeItem("message")
                    history.push("/")
                    history.go(0)
                }
            }, 3000);
        } else if(isSuccess === "false") {
            setLoading(true);
            Toast.fire({
                icon: 'error',
                title: message
            })
            setLoading(false);
            localStorage.removeItem("isSuccess")
            localStorage.removeItem("message")
        } 
    }, [Toast, history, isAdmin, isSuccess, message]);

    const handleClose = () => {
        setLoading(false);
    };
    
    const handleToggle = () => {
        if(isAdmin === null && message === null){
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <Forms 
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.form}
        >
            <Grid 
                container 
                spacing={2}
            >
                <Grid item xs={12}>
                    <Typography 
                        variant="h5"
                        color="primary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        Login
                    </Typography>
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
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                        style={{ marginTop: "25px" }}
                        onClick={handleToggle}
                    >
                        Login
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        style={{ margin: "10px", textAlign: "center"}}
                    >
                        Don't have an account? Click
                        <Link 
                            to="/register"
                            className={classes.link}
                        >
                            here
                        to register
                        </Link>
                    </Typography>
                </Grid>
                <Backdrop 
                    open={loading} 
                    onClick={handleClose}
                    className={classes.backdrop}    
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Grid>
        </Forms>
    )
}

export default Form;
