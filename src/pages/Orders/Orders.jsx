import React, { useEffect, useState } from 'react';

// components
import Hero from '../../components/Hero/Hero';

// MUI
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography 
} from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../redux/actions/orders';


const Orders = () => {
    window.scrollTo({ top: 0 })
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.orders[0]);
    const useId = localStorage.getItem("userId");
    const [ orders, setOrders ] = useState(selector);
    const [expanded, setExpanded] = React.useState(false);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchOrders = async(data) => {
        dispatch(getUserOrders(useId));
        setOrders(data);
    }
    
    useEffect(() => {
        let mounted = true;
        if(mounted && !orders?.length){
            fetchOrders(selector);
        }
        return () => {
            mounted = false
        };
    }, [selector, orders, fetchOrders]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function thousands_separators(num) {
        if(num !== undefined){
            const num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        } else {
            return null;
        }
    }
    return(
        <div>
            <Hero heroImg="/img/hero-3.jpg" title="My Orders" />
            <div className={classes.root}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    MY <span id="best-sellers" className={classes.title}> ORDERS </span>
                </Typography>
                {
                    orders?.map((order, index) => {
                        return (
                            <Accordion style={{ width: "50%", margin: "auto" }} key={order._id} expanded={expanded === `order#${index+1}`} onChange={handleChange(`order#${index+1}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography className={classes.heading}>Order # {index+1}</Typography>
                                    <Typography className={classes.secondaryHeading}>{ order.email }</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.orderWrapper}>
                                    <List className={classes.listWrapper}>
                                        {
                                            order?.products.map(prod => {
                                                return (
                                                    <ListItem key={prod._id} className={classes.listItem}>
                                                        <ListItemAvatar>
                                                            <Box className={classes.itemImage}>
                                                                <img 
                                                                    className={classes.uploadImage}
                                                                    src={prod.productImage} 
                                                                    alt={prod.productName} 
                                                                />
                                                            </Box>
                                                        </ListItemAvatar>
                                                        <ListItemText primary={prod.productName} secondary={`Price: ₱${thousands_separators(prod.productPrice)} Qty: ${prod.qty} Subtotal: ₱${thousands_separators(prod.subtotal)}`} />
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>
                                    <Box className={classes.rightSide}>
                                        <Typography className={classes.font3}>
                                            TOTAL AMOUNT
                                        </Typography>
                                        <Typography className={classes.font6}>
                                            ₱{thousands_separators(order.totalAmount)}
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Orders;
