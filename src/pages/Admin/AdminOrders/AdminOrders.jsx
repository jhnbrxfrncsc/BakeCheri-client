import React, { useState } from 'react';

// MUI
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

// components
import Hero from '../../../components/Hero/Hero';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../redux/actions/orders';
import { useEffect } from 'react';

const AdminOrders = () => {
    window.scrollTo({ top: 0 })
    const classes = useStyles();
    const selector = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const [ orders, setOrders ] = useState(selector)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchOrders = async(data) => {
        dispatch(getOrders());
        setOrders(data);
    }
    
    useEffect(() => {
        let mounted = true;
        if(mounted && !orders.length){
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

    return (
        <>
            <Hero heroImg="/img/customCake-3.jpg" title="orders"/>
            <div className={classes.root}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    ALL <span id="best-sellers" className={classes.title}> ORDERS </span>
                </Typography>
                {
                    orders?.map((order, index) => {
                        return (
                            <Accordion key={order._id} expanded={expanded === `order#${index+1}`} onChange={handleChange(`order#${index+1}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography className={classes.heading}>Order # {index+1}</Typography>
                                    <Typography className={classes.secondaryHeading}>{ order.email }</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={classes.orderWrapper}>
                                    <List className={classes.listWrapper}>
                                        {
                                            order.products.map(prod => {
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
        </>
    )
}

export default AdminOrders;