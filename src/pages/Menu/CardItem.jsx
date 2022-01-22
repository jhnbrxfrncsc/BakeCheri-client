import React, {  useEffect } from 'react';

// Material UI
import useStyle from './styles';
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box
} from '@material-ui/core';

// Icon
import { FaCartPlus } from 'react-icons/fa';

// Redux
import { useDispatch } from 'react-redux';

// router
import { Link, useHistory } from 'react-router-dom';
import { addCartItem } from '../../redux/actions/users';

const CardItem = ({ id, name, title, price, image, loading, setLoading }) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = localStorage.getItem("userId");

    useEffect(()=> {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [setLoading]);

    const addToCart = () => {
        if(userId){
            const cartItem = {
                userId,
                productName: title,
                productPrice: price,
                productImage: image,
                qty: 1
            }
            dispatch(addCartItem(cartItem, history));
        } else {
            alert('Please Login/Sign Up');
            history.push("/login")
        }
    }
    
    return(
        <Card>
            <CardActionArea
                component={Link}
                to={`/products/${id}`}
            >
                {
                    !loading ? (
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                    ) : (
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title={title}
                        >
                            <Box className={classes.price}>
                                <Typography className={classes.priceTxt}>
                                    ₱{price}
                                </Typography>
                            </Box>
                        </CardMedia>
                    )
                }
            </CardActionArea>
            <CardContent className={classes.contentCard}>
                {
                    !loading ? (
                        <Skeleton animation="wave" height={10} />
                    ) : (
                        <>
                            <Typography 
                                align="center"
                                variant="h6" 
                                component="h2" 
                                className={classes.font2}
                            >
                                {name}
                            </Typography>
                            <IconButton 
                                aria-label="add to cart"
                                onClick={addToCart}
                                className={classes.btnAction}
                            >
                                <FaCartPlus style={{ color:"#FFF", fontSize: "1em", fontWeight: "300" }} />
                            </IconButton>
                        </>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default CardItem
