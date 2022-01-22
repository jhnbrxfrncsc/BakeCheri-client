import * as api from '../../api/api';



export const getUsers = () => async (dispatch) => {
    try {
        const res = await api.fetchUsers();
        const { data } = res.data;
        dispatch({ type: "FETCH_USERS", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const getUser = (userId) => async (dispatch) => {
    try {
        const res = await api.fetchUser(userId);
        const { data } = res.data;
        dispatch({ type: "GET_USER", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const userLogin = (userDetails, history) => async (dispatch) => {
    try {
        const res = await api.loginUser(userDetails);
        const { data, isSuccess, token, message } = res.data;
        if(isSuccess){
            const userData = {
                ...data, token
            }
            // alert(message)
            localStorage.setItem("token", token);
            localStorage.setItem("userId", data._id);
            localStorage.setItem("email", data.email);
            localStorage.setItem("isAdmin", data.isAdmin);
            localStorage.setItem("message", message);
            localStorage.setItem("isSuccess", isSuccess);
            // if(data.isAdmin){
            //     history.push('/admin/profile')
            //     history.go(0);
            // } else {
            //     history.push('/');
            //     history.go(0);
            // }
            dispatch({ type : "LOGIN_USER", payload: userData });
        } else if(!isSuccess) {
            localStorage.setItem("message", message);
            localStorage.setItem("isSuccess", isSuccess);
        }
    } catch (error) {
        console.log(error.message)    
    }
}

export const userRegister = (userDetails, history) => async (dispatch) => {
    
    try {
        const { data } = await api.registerUser(userDetails);
        const { isSuccess, message } = data;
        console.log(data);
        if(isSuccess){
            alert(message);
            history.push('/login');
        } else {
            alert(message);
        }
        dispatch({ type : "REGISTER_USER" });
    } catch (error) {
        console.log(error.message)    
    }
}

export const userLogout = (history) => async (dispatch) => {
    try {
        alert("Logging out...");
        localStorage.clear()
        history.push('/login');
        history.go(0);
        dispatch({ type: "LOGOUT_USER" });
    } catch (error) {
        console.log(error.message)    
    }
}

export const changeRole = (userId, history) => async (dispatch) => {
    try {
        const { data } = await api.roleChanger(userId);
        const { isSuccess, message } = data;
        if(isSuccess){
            alert(message);
            history.go(0);
        } else if(!isSuccess) {
            alert(message);
        }
        dispatch({ type : "CHANGE_ROLE" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = (userId, history) => async (dispatch) => {
    try {
        const { data } = await api.userDeletion(userId);
        const { isSuccess, message } = data;
        if(isSuccess){
            alert(message);
            history.go(0);
        } else if(!isSuccess) {
            alert(message);
        }
        dispatch({ type : "DELETE_USER", payload: userId });
    } catch (error) {
        console.log(error.message);
    }
}

export const addCartItem = (cartItem, history) => async (dispatch) => {
    try {
        const { data } = await api.cartItemAddition(cartItem);
        const { isSuccess, message } = data;
        if(isSuccess){
            alert(message);
            history.go(0);
        } else if(!isSuccess) {
            alert(message);
        }
        dispatch({ type : "ADD_CART_ITEM" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCartItem = (cartItem, history) => async (dispatch) => {
    try {
        const { data } = await api.cartItemDeletion(cartItem);
        const { isSuccess, message } = data;
        if(isSuccess){
            alert(message);
            history.go(0);
        } else if(!isSuccess) {
            alert(message);
        }
        dispatch({ type : "DELETE_CART_ITEM" });
    } catch (error) {
        console.log(error.message);
    }
}