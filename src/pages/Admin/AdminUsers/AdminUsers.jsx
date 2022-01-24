import React, { useEffect, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { changeRole, deleteUser, getUsers } from '../../../redux/actions/users';

// MUI
import useStyles from './styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    IconButton,
    MenuItem,
    TextField,
} from '@material-ui/core';

// components
import Hero from '../../../components/Hero/Hero';

// icons
import { AiFillDelete } from 'react-icons/ai';

// icons
import { useHistory } from 'react-router-dom';

const AdminUsers = () => {
    window.scrollTo({ top: 0 })
    const classes = useStyles();
    const history = useHistory();
    const userId = localStorage.getItem("userId")
    const selector = useSelector(state => state.users.users?.filter( user => userId !== user._id));
    const dispatch = useDispatch();
    const [users, setUsers] = useState(selector);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUsers = async(data) => {
        await dispatch(getUsers());
        setUsers(data)
    }

    useEffect(() => {
        let mounted = true;
        if(mounted && !users?.length){
            fetchUsers(selector);
        } 
        return () => {
            mounted = false;
        }
    }, [fetchUsers, selector, users]);
    
    const handleChange = (id) => {
        dispatch(changeRole(id, history));
        fetchUsers();
    }
    
    const handleDelete = (id) => {
        dispatch(deleteUser(id, history));
        fetchUsers();
    }

    return (
        <>
            <Hero heroImg="/img/customCake-2.jpg" title="users" />
            <Box className={classes.container}>
                <Typography 
                    variant="h4"
                    color="primary" 
                    align="center"
                    gutterBottom
                    className={classes.font1}
                >
                    ALL <span id="best-sellers" className={classes.title}> USERS </span>
                </Typography>
                <TableContainer component={Paper} style={{ margin: "25px" }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.tHeader}>
                                <TableCell align="center" className={classes.font3}>First Name</TableCell>
                                <TableCell align="center" className={classes.font3}>Last Name</TableCell>
                                <TableCell align="center" className={classes.font3}>Email</TableCell>
                                <TableCell align="center" className={classes.font3}>Orders</TableCell>
                                <TableCell align="center" className={classes.font3}>Role</TableCell>
                                <TableCell align="center" className={classes.font3}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            users?.map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell 
                                        align="center" 
                                        component="th" scope="row"
                                        className={classes.font4}
                                    >
                                        {user.firstName}
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        className={classes.font4}
                                    >
                                        {user.lastName}
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        className={classes.font4}
                                    >
                                        {user.email}
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        className={classes.font4}
                                    >
                                        {user.orders.length}
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                        className={classes.font4}
                                    >
                                        <TextField
                                            select
                                            value={ user.isAdmin ? "Admin" : "Customer" }
                                            onChange={() => handleChange(user._id)}
                                            variant="outlined"
                                        >
                                            <MenuItem key="Admin" value="Admin">
                                                Admin
                                            </MenuItem>
                                            <MenuItem key="Customer" value="Customer">
                                                Customer
                                            </MenuItem>
                                        </TextField>
                                    </TableCell>
                                    <TableCell 
                                        align="center"
                                    >
                                        <IconButton onClick={() => handleDelete(user._id)}>
                                            <AiFillDelete style={{ color:"red" }} />  
                                        </IconButton>    
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box> 
        </>
    )
}

export default AdminUsers;