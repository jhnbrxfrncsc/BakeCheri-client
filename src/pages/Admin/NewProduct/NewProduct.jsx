import React from 'react';

// Formik
import { Formik } from 'formik';
import Schema from '../../../schema/newProductSchema';

// Material UI
import { Box, Paper, Slide, Zoom } from '@material-ui/core';
import useStyles from './styles';

// Redux
import { useDispatch, } from 'react-redux';
import { postProduct } from '../../../redux/actions/products';

// Component
import Form from './Form';

// router 
import { useHistory } from 'react-router-dom'

const NewProduct = () => {
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
                                    name: "",
                                    image: "",
                                    price: "",
                                    category: "",
                                }}
                                onSubmit={
                                    (data, { resetForm }) => {
                                        const newData = { 
                                            productName: data.name, 
                                            productImage: data.image, 
                                            productPrice: data.price,
                                            productCategory: [data.category, 'All'] 
                                        };
                                        dispatch(postProduct(newData, history));
                                        resetForm({ values : '' });
                                    }
                                }
                                validationSchema = {Schema}
                                component={Form}
                            />
                        </Paper>
                    </Zoom>
                </Box>
            </Slide>
        </Box>
    )
}

export default NewProduct;
