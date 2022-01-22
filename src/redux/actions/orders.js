import * as api from '../../api/api';


export const getOrders = () => async (dispatch) => {
    try {
        const res = await api.fetchOrders();
        const { data } = res.data;
        dispatch({ type : "FETCH_ORDERS", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const newOrder = (cartData, history) => async (dispatch) => {
    try {
        const res = await api.placeOrder(cartData);
        const { message, data, isSuccess } = res.data;
        if(isSuccess){
            alert(message);
            history.go(0);
            history.push("/orders")
        } else {
            alert(message);
        }
        dispatch({ type : "NEW_ORDER", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const getUserOrders = (userId) => async (dispatch) => {
    try {
        const res = await api.fetchUserOrders(userId);
        const { data } = res.data;
        dispatch({ type : "USER_ORDERS", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}