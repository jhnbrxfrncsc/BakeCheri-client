import React, { useState, useEffect } from 'react';

// Components
import Hero from '../../components/Hero/Hero'; 
import CardItem from './CardItem';
import Filter from '../../components/Filter/Filter';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/products';

// MaterialUI
import {
    Typography,
    Grid,
    Box,
    CircularProgress,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useStyle from './styles';


const Menu = () => {
    const classes = useStyle();

    // Redux
    const dispatch = useDispatch();
    const selector = useSelector( state => state.products.filter(prod => prod.isActive ));
    const [data, setData] = useState(selector);

    // Pagination state
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const noOfPages = Math.ceil(data.length / itemsPerPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProducts = async(prods) => {
        dispatch(getProducts());
        setData(prods)
    }
    
    useEffect(() => {
        let mounted = true;
        if(mounted && data.length === 0) {
            fetchProducts(selector);
        }
        return () => {
            mounted = false;
        }
    }, [data.length, fetchProducts, selector]);

    const handleChange = (event, value) => {
        setLoading(false);
        setPage(value);
        setTimeout(() => {
            setLoading(true);
        }, 100);
    };
    
    const handleFilter = (name) => {
        const newItems = selector.filter(item => item.productCategory.indexOf(name) >= 0);
        setLoading(false);
        setData(newItems);
        setPage(1);
        setTimeout(() => {
            setLoading(true);
        }, 500);
    }
    return (
        <>
            <Hero heroImg="/img/doughnutHeader.jpg" title="menu" />
            <Box m={3} className={classes.center}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    OUR <span id="best-sellers" className={classes.title}> PRODUCTS </span>
                </Typography>
                <Box m={3} className={classes.filterWrapper}>
                    <Filter name="All" onClick={() => handleFilter("All")} />
                    <Filter name="Cakes" onClick={() => handleFilter("Cakes")} />
                    <Filter name="Cupcakes" onClick={() => handleFilter("Cupcakes")} />
                    <Filter name="Doughnuts" onClick={() => handleFilter("Doughnuts")} />
                    <Filter name="Sweets" onClick={() => handleFilter("Sweets")} />
                </Box>
                <Grid 
                    container 
                    spacing={6} 
                    alignItems="center" 
                    justify="center"
                    style={{ padding: "30px 120px" }}
                >
                    {
                        data.length ? (
                        data
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                            .map((prod, i) => {
                                return(
                                    <Grid
                                        key={i + 1}
                                        item 
                                        sm={12}
                                        md={6} 
                                        lg={3} 
                                    >
                                        <CardItem 
                                            key={i+1}
                                            id={prod._id}
                                            name={prod.productName} 
                                            title={prod.productName} 
                                            price={prod.productPrice} 
                                            image={prod.productImage} 
                                            loading={loading}
                                            setLoading={setLoading}
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
        </>
    )
}

export default Menu;
