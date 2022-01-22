import React,{ useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Slide,
    Fade
} from '@material-ui/core';
import useStyle from './BestSellersStyles';
import CardItem from './CardItem';

import { useSelector } from 'react-redux';


const Products = () => {
    const classes = useStyle();
    const [animation, setAnimation] = useState(false);

    const selector = useSelector(state => state.products);

    const handleAnimation = () => {
        if(window.scrollY >= 1200) {
            setAnimation(true)
        }
    }

    window.addEventListener('scroll', handleAnimation);
    return (
        <Box m={3} py={5}>
            <Slide direction="right" in={animation} timeout={2000}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    OUR <span id="best-sellers" className={classes.title}> BEST SELLERS </span>
                </Typography>
            </Slide>
            <Slide direction="left" in={animation} timeout={2000}>
                <Box
                    className={classes.divider}
                />
            </Slide>
            <Fade in={animation} timeout={3000}>
                <Grid 
                    container 
                    spacing={8} 
                    alignItems="center" 
                    justify="center"
                    style={{ margin: 0, maxWidth: "100%" }}
                >
                    {
                        selector.sort((a, b) => (a.productOrders.length > b.productOrders.length ? -1 : 1)).map((product, index) => {
                            return (
                                index < 3 ? (
                                    <Grid item xs={12} sm={9} md={6} lg={3} key={product._id}>
                                        <CardItem 
                                            id={product._id}
                                            name={product.productName} 
                                            title={product.productName} 
                                            image={product.productImage} 
                                            price={product.productPrice} 
                                        />
                                    </Grid>
                                ) : (
                                    " "
                                )
                            )
                        })
                    }
                </Grid>
            </Fade>
        </Box>
    )
}

export default Products;
