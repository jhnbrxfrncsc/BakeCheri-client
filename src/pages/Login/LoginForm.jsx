import React, { useState, useEffect } from 'react';

// Formik
import { Form as Forms } from 'formik';

// Material UI
import useStyles from './loginStyles';
import {
    Backdrop,
    Button,
    CircularProgress,
    Grid,
    Snackbar,
    Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// components
import Textfield from '../../components/FormsUI/Textfield';

// router
import { Link, useHistory } from 'react-router-dom';

const Form = ({ handleSubmit }) => {
    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const message = localStorage.getItem("message");
    const isAdmin = localStorage.getItem("isAdmin");
    const isSuccess = localStorage.getItem("isSuccess");

    const vertical = 'top';
    const horizontal = 'center';
    
    useEffect(() => {
        if(isSuccess === "true"){
            setLoading(true);
            setAlertMsg("Login Successful");
            setOpen(true);
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
            }, 4000);
        } else if(isSuccess === "false") {
            setLoading(true);
            setAlertMsg(message);
            setOpen(true);
            setTimeout(() => {
                setLoading(false);
                setOpen(false);
            }, 5000);
            localStorage.removeItem("isSuccess")
            localStorage.removeItem("message")
        } 
    }, [history, isAdmin, isSuccess, message]);

    const handleClose = () => {
        setOpen(false);
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
                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={message}
                    >
                        <Alert
                            elevation={8}
                            severity={isSuccess === "true" ? "success" : "error"}
                            onClose={handleClose}
                            variant="filled"
                            className={classes.alert}
                        >
                            <Typography className={classes.alertTitle}>
                                {alertMsg}
                            </Typography>
                        </Alert>
                    </Snackbar>
                </Backdrop>
            </Grid>
        </Forms>
    )
}

export default Form;
