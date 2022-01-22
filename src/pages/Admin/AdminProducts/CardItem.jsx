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
    Box,
    Button,
    CardActions
} from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { putAvailability, removeProduct } from '../../../redux/actions/products';

// router
import { Link } from 'react-router-dom';


const CardItem = ({ id, name, title, price, image, loading, setLoading, isActive }) => {
    const classes = useStyle();
    const dispatch = useDispatch();

    useEffect(()=> {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [setLoading]);

    const updateActive = (prodId) => {
        dispatch(putAvailability(prodId));
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
                            <Box className={isActive ? classes.available : classes.unavailable }>
                                <Typography className={classes.availability}>
                                    { isActive ? "Available" : "Unavailable" }
                                </Typography>
                            </Box>
                        </CardMedia>
                    )
                }
            </CardActionArea>
            <CardContent 
                className={classes.contentCard} 
                style={{ background: isActive ? "#00D100" : "red" }}
            >
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
                        </>
                    )
                }
            </CardContent>
            <CardActions className={classes.prodActions} style={{ background: isActive ? "#00D100" : "red" }}>
                <Button 
                    className={classes.prodBtn}
                    style={{ background: isActive ? "red" : "#00D100" }}
                    variant="contained" 
                    size="large" 
                    color="secondary"
                    onClick={() => updateActive(id)}
                >
                    { isActive ? "Archive" : "Activate" }
                </Button>
                {
                    isActive ? (
                        <Button 
                            component={Link}
                            to={`edit-product/${id}`}
                            className={classes.prodBtn}
                            variant="contained" 
                            size="large" 
                            style={{ background: "#FFF", color: "#000" }}
                        >
                            Edit
                        </Button>
                    ) : (
                        <Button 
                            className={classes.prodBtn}
                            variant="contained" 
                            size="large" 
                            style={{ background: "#000", color: "#FFF" }}
                            onClick={() => dispatch(removeProduct(id))}
                        >
                            Delete
                        </Button>
                    )
                }
            </CardActions>
        </Card>
    )
}

export default CardItem
