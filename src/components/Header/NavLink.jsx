import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavLink = ({ title, to, linkClass, txtClass, handleClick }) => {
    return (
        <Link 
            to={to}
            onClick={handleClick}
            className={linkClass}
        >
            <Typography 
                variant="body2"  
                className={txtClass}
            >
                {title}
            </Typography>
        </Link>
    )
}

export default NavLink
