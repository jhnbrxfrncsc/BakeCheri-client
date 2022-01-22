import React from 'react';

// MUI
import { Button } from '@material-ui/core';
import useStyles from './styles';

const Filter = ({ name, onClick }) => {
    const classes = useStyles();
    return (
        <Button
            className={classes.filterBtn}
            variant="contained"
            size="medium"
            color="primary"
            onClick={onClick}
        >
            {name}
        </Button>
    )
}

export default Filter;