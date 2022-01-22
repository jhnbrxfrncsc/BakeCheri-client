import React, { useState, useEffect } from 'react';

// components
import Hero from '../../../components/Hero/Hero';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/actions/products';

// MaterialUI
import {
    Typography,
    Grid,
    Box,
    CircularProgress,
    Button,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useStyle from './styles';

// components
import CardItem from './CardItem';
import Filter from '../../../components/Filter/Filter';

// router
import { Link } from 'react-router-dom';

const AdminProducts = () => {
    const classes = useStyle();

    // Redux
    const dispatch = useDispatch();
    const selector = useSelector( state => state.products );
    const [data, setData] = useState(selector);

    // Pagination state
    const itemsPerPage = 8;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const noOfPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        let mounted = true;
        if(mounted && !data.length) {
            dispatch(getProducts());
            setData(selector)
        }
        return () => {
            mounted = false;
        }
    }, [selector, dispatch, data.length]);

    const handleChange = (event, value) => {
        setLoading(false);
        setPage(value);
        setTimeout(() => {
            setLoading(true);
        }, 100);
    };
    
    const handleFilter = (name) => {
        const newItems = selector.filter(item => item.isActive === name);
        setLoading(false);
        setData(newItems);
        setPage(1);
        setTimeout(() => {
            setLoading(true);
        }, 500);
    }
    return (
        <div>
            <Hero heroImg="/img/cupcake-header-2.jpg" title="products" />
            <Box m={3} className={classes.center}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    ALL <span id="best-sellers" className={classes.title}> PRODUCTS </span>
                </Typography>
                <Box m={3} className={classes.filterWrapper}>
                    <Box>
                        <Button
                            component={Link}
                            to="/admin/new-product"
                            className={classes.addProd}
                            variant="contained"
                            size="medium"
                            color="secondary"
                        >
                            Add New Product
                        </Button>
                    </Box>
                </Box>
                <Box m={3} className={classes.filterWrapper}>
                    <Filter name="All" onClick={() => setData(selector)} />
                    <Filter name="Active" onClick={() => handleFilter(true)} />
                    <Filter name="Archive" onClick={() => handleFilter(false)} />
                </Box>
                <Grid 
                    container 
                    spacing={6} 
                    alignItems="center" 
                    justify="center"
                    style={{ padding: "30px 120px" }}
                >
                    {
                        (data.length >= 1) ? (
                        data
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                            .map((prod, i) => {
                                return(
                                    <Grid
                                        key={i + 1}
                                        item 
                                        xs={12} 
                                        sm={12} 
                                        md={4} 
                                        lg={3} 
                                    >
                                        <CardItem 
                                            key={i+1}
                                            id={prod?._id}
                                            name={prod?.productName} 
                                            title={prod?.productName} 
                                            price={prod?.productPrice} 
                                            image={prod?.productImage} 
                                            loading={loading}
                                            setLoading={setLoading}
                                            isActive={prod?.isActive}
                                        />
                                    </Grid>
                                )
                            })
                        ) : (
                            <Typography variant="h3">
                                <CircularProgress />
                            </Typography>
                        )
                    }
                </Grid>
                <Box className={classes.pagination}>
                    <Pagination 
                        count={noOfPages}
                        page={page}
                        onChange={handleChange}
                        defaultPage={1}
                        color="primary" 
                        showFirstButton 
                        showLastButton
                    />
                </Box>
            </Box>
        </div>
    );
};

export default AdminProducts;
