import React, { useEffect, useState } from 'react';

// Material UI
import useStyles from './styles';
import { 
    Box,
    Button,
    CircularProgress,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography
} from '@material-ui/core';

// icons
import { AiFillDelete } from 'react-icons/ai';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, deleteCartItem, getUser } from '../../redux/actions/users';
import { newOrder } from '../../redux/actions/orders';

// router
import { useHistory, Link } from 'react-router-dom';

const Cart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const selector = useSelector(state => state.users.loginDetails);
    const [user, setUser] = useState(selector);

    let prodPrice;
    let totalBill;
    if(user?.cartItems.length !== 0){
        prodPrice = user?.cartItems.map(cart => cart.productPrice * cart.qty);
        totalBill = prodPrice?.reduce((a, b) => a + b);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUser = async(data) => {
        dispatch(getUser(userId));
        setUser(data);
    }
    
    useEffect(() => {
        let mounted = true;
        if(mounted && !user){
            fetchUser(selector);
        }
        return () => {
            mounted = false
        };
    }, [fetchUser, selector, user]);
    

    function thousands_separators(num) {
        if(num !== undefined){
            const num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        } else {
            return null;
        }
    }

    const addToCart = (productName, productPrice, productImage, act, quantity) => {
        const cartItem = {
            userId,
            productName,
            productPrice,
            productImage,
            qty: 1,
            act
        }
        if(quantity > 1 || (quantity === 1 && act === "inc")){
            dispatch(addCartItem(cartItem, history));
        }
    }

    const deleteItem = (productName) => {
        const cartItem = {
            userId,
            productName
        };
        dispatch(deleteCartItem(cartItem, history));
    }

    const placeOrder = () => {
        user.cartItems.forEach(item => {
            item.subtotal = item.productPrice * item.qty;
        })
        const cartItem = {
            userId,
            email,
            totalAmount: totalBill,
            products: user.cartItems
        };
        dispatch(newOrder(cartItem, history));
    }
    
    return (
        <Box className={classes.container}>
            <Typography 
                variant="h4"
                color="primary" 
                align="center"
                gutterBottom
                className={classes.font1}
            >
                SHOPPING <span className={classes.title}> CART </span>
            </Typography>
            <TableContainer className={classes.tableWrapper}>
                {
                    (user?.cartItems.length) ? (
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.tHeader}>
                                    <TableCell align="center" className={classes.font3}>Remove</TableCell>
                                    <TableCell align="center" className={classes.font3}>Image</TableCell>
                                    <TableCell align="center" className={classes.font3}>Product</TableCell>
                                    <TableCell align="center" className={classes.font3}>Price</TableCell>
                                    <TableCell align="center" className={classes.font3}>Quantity</TableCell>
                                    <TableCell align="center" className={classes.font3}>Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    user?.cartItems.map(cartItem => {
                                        return (
                                            <TableRow key={cartItem._id}>
                                                <TableCell 
                                                    align="center" 
                                                    component="th" scope="row"
                                                    className={classes.font4}
                                                >
                                                    <IconButton
                                                        onClick={() => deleteItem(cartItem.productName)}
                                                    >
                                                        <AiFillDelete 
                                                            style={{ color:"red" }} 
                                                        />  
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell 
                                                    align="center"
                                                    className={classes.font4}
                                                >
                                                    <img 
                                                        className={classes.uploadImage}
                                                        src={cartItem.productImage} 
                                                        alt={cartItem.productName}  
                                                    />
                                                </TableCell>
                                                <TableCell 
                                                    align="center"
                                                    className={classes.font4}
                                                >
                                                    {cartItem.productName}
                                                </TableCell>
                                                <TableCell 
                                                    align="center"
                                                    className={classes.font4}
                                                >
                                                    ₱{thousands_separators(cartItem.productPrice)} 
                                                </TableCell>
                                                <TableCell 
                                                    align="center"
                                                    className={classes.font4}
                                                >
                                                    <IconButton 
                                                        onClick={() => addToCart(cartItem.productName, cartItem.productPrice, cartItem.productImage, "dec", cartItem.qty)}
                                                        style={{ marginRight:"20px" }}
                                                    >
                                                        -
                                                    </IconButton>
                                                    
                                                    {cartItem.qty}

                                                    <IconButton
                                                        onClick={() => addToCart(cartItem.productName, cartItem.productPrice, cartItem.productImage, "inc", cartItem.qty)} 
                                                        style={{ marginLeft:"20px" }}
                                                    >
                                                        +
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell 
                                                    align="center"
                                                >
                                                    ₱{thousands_separators(cartItem.productPrice * cartItem.qty)}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    ) : (!user?.cartItems.length || !userId) ? (
                        <Box 
                            className={classes.emptyCart}
                        >
                            Your Cart is Empty
                        </Box>
                    ) : (
                        <CircularProgress />
                    )
                }
                <Box className={classes.totalWrap}>
                    <Box className={classes.totalBox}>
                        {
                            userId ? (
                                <>
                                    <Typography className={classes.font5}>
                                        Total Bill
                                    </Typography>
                                    <Typography className={classes.font6}>
                                        ₱{thousands_separators(totalBill) || 0}
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className={classes.checkoutBtn}
                                        onClick={placeOrder}
                                    >
                                        Checkout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Typography className={classes.font5}>
                                        Please Login
                                    </Typography>
                                    <Button 
                                        component={Link}
                                        to="/login"
                                        variant="contained" 
                                        color="primary" 
                                        className={classes.checkoutBtn}
                                        onClick={placeOrder}
                                    >
                                        Login 
                                    </Button>
                                </>
                            )
                        }
                    </Box>
                </Box>
            </TableContainer>
        </Box>
    );
};

export default Cart;
