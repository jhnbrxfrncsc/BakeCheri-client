import React, { useEffect } from 'react';

// Formik
import { Formik } from 'formik';
import Schema from '../../../schema/newProductSchema';

// Material UI
import { Box, Paper, Slide, Zoom } from '@material-ui/core';
import useStyles from './styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, putProduct } from '../../../redux/actions/products';

// Component
import Form from './Form';
import { useParams, useHistory } from 'react-router-dom';


const EditProduct = () => {
    window.scrollTo({ top: 0 })
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.products);
    const { prodId } = useParams()
    const product = selector.filter(prod => prod._id === prodId);
    const { _id, productName, productCategory, productImage, productPrice } = product[0];


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    

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
                                    name: `${productName}`,
                                    image: `${productImage}`,
                                    price: `${productPrice}`,
                                    category: `${productCategory[0]}`,
                                }}
                                onSubmit={
                                    (data) => {
                                        const newData = { 
                                            productName: data.name, 
                                            productImage: data.image, 
                                            productPrice: data.price,
                                            productCategory: [data.category, 'All'] 
                                        };
                                        dispatch(putProduct(_id, newData, history));
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

export default EditProduct;
