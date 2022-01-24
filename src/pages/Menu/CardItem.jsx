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

// alert
import Swal from 'sweetalert2';

const CardItem = ({ id, name, title, price, image, loading, setLoading }) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = localStorage.getItem("userId");
    const isSuccess = localStorage.getItem("isSuccess");
    const message = localStorage.getItem("message");

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

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
            dispatch(addCartItem(cartItem));
            Toast.fire({
                icon: 'success',
                title: message
            })
            setTimeout(() => {
                if(isSuccess === "true"){
                    history.go(0)
                } else if(isSuccess === "false"){
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                }
            }, 2000);
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Please Login/Sign Up'
            });
            setTimeout(() => {
                history.push("/login");
            }, 3000);
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
