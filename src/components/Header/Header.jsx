import React, { useState } from 'react';

// Material UI
import useStyles from './headerStyles';
import { 
    AppBar, 
    Box,
    Grow,
    IconButton, 
    Toolbar, 
    Tooltip, 
    Typography } 
from '@material-ui/core';

// Router
import { Link, useHistory } from 'react-router-dom';

// Icons
import { BiLogOut, BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// redux
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/users';

// component
import NavLink from './NavLink';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const isAdmin = localStorage.getItem("isAdmin");

    const [nav, setNav] = useState(window.innerWidth > 0 ? false : true);
    const [navPosition, setNavPosition] = useState("static");

    // Event handlers
    const openNav = () => setNav(!nav)

    const changeNavPosition = () => {
        const scrollDown = window.scrollY;
        if(scrollDown >= 100){
            setNavPosition("fixed");
        } else {
            setNavPosition("static");
        }
    };

    const changeNavScreen = () => {
        const navScreen = window.innerWidth;
        if(navScreen <= 1280){
            setNav(false);
        } else {
            setNav(true);
        }
    };

    const handleClick = () => {
        if(window.innerWidth < 1280){
            setNav(false);
        } else {
            setNav(nav);
        }
    } 

    const handleLogout = () => {
        dispatch(userLogout(history));
    }

    window.addEventListener('scroll', changeNavPosition);
    window.addEventListener('resize', changeNavScreen);
    return (
        <header>
            <AppBar position={navPosition} >
                <Toolbar style={{ zIndex: 9999, position: "relative" }}>
                    <Box
                        p={0}
                        m={0}
                        className={classes.navicon}
                        style={{
                            marginLeft: "-100px",
                            left: "50%",
                        }}
                    >
                        <Link to="/" className={classes.icon}>
                            <Typography 
                                variant="h3" 
                                style={{ 
                                    fontFamily: "'Sniglet', cursive", 
                                    color: "#f8bbd0" 
                                }}
                            >
                                BakeCheri
                            </Typography>
                        </Link>
                    </Box>

                    { 
                        nav ? (
                            <AiOutlineClose
                                className={classes.burger} 
                                onClick={openNav}
                            />
                        ) : (
                            <BiMenu  
                                className={classes.burger} 
                                onClick={openNav}
                            />
                        )
                    }

                    <Box
                        p={0}
                        m={0}
                        className={ nav ? classes.navlinks : classes.nodisplay }
                    >
                        
                        {
                            isAdmin === "true" ?  (
                                <>
                                    <NavLink 
                                        title="profile"
                                        to="/admin/profile"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                    
                                    <NavLink 
                                        title="products"
                                        to="/admin/products"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />

                                    <NavLink 
                                        title="users"
                                        to="/admin/users"
                                        linkClass={classes.linkmarginleft}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                    
                                    <NavLink 
                                        title="orders"
                                        to="/admin/orders"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                </>
                            ) : isAdmin === "false" ? (
                                <>
                                    <NavLink 
                                        title="home"
                                        to="/"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                    
                                    <NavLink 
                                        title="menu"
                                        to="/menu"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />

                                    <NavLink 
                                        title="about"
                                        to="/about"
                                        linkClass={classes.linkmarginleft}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />

                                    <NavLink 
                                        title="profile"
                                        to="/profile"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                </>
                            ) : (
                                <>
                                    <NavLink 
                                        title="home"
                                        to="/"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                    
                                    <NavLink 
                                        title="menu"
                                        to="/menu"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />

                                    <NavLink 
                                        title="about"
                                        to="/about"
                                        linkClass={classes.linkmarginleft}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />

                                    <NavLink 
                                        title="login/register"
                                        to="/login"
                                        linkClass={classes.links}
                                        txtClass={classes.font2}
                                        handleClick={handleClick}
                                    />
                                </>
                            )
                        }
                    </Box>
                    <Box
                        className={classes.navActions}
                    >
                        {
                            isAdmin === "true" ? (
                                <Tooltip title="Logout" TransitionComponent={Grow} >
                                    <IconButton
                                        className={classes.cartBtn}
                                        onClick={handleLogout}
                                    >
                                        <BiLogOut />
                                    </IconButton>
                                </Tooltip>
                            ) : isAdmin === "false" ? (
                                <>
                                    <Tooltip title="Logout">
                                        <IconButton
                                            className={classes.cartBtn}
                                            onClick={handleLogout}
                                        >
                                            <BiLogOut />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Cart">
                                        <IconButton
                                            component={Link}
                                            to="/cart"
                                            className={classes.cartBtn}
                                        >
                                            <AiOutlineShoppingCart />
                                        </IconButton>
                                    </Tooltip>
                                </>
                            ) : (
                                <Tooltip title="Cart">
                                    <IconButton
                                        component={Link}
                                        to="/cart"
                                        className={classes.cartBtn}
                                    >
                                        <AiOutlineShoppingCart />
                                    </IconButton>
                                </Tooltip>
                            )
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
