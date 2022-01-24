import * as api from '../../api/api';

export const getProducts = () => async (dispatch) => {
    try {
        const res = await api.fetchProducts();
        const { data } = res.data
        dispatch({ type : "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const postProduct = (product, history) => async (dispatch) => {
    try {
        const res = await api.createProduct(product);
        const { data, message, isSuccess } = res.data;
        if(isSuccess){
            alert(message);
            history.push('/admin/products');
        } else {
            alert(message)
            history.go(0)
        }
        dispatch({ type : "CREATE_PRODUCT", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const putAvailability = (prodId, history) => async (dispatch) => {
    try {
        const res = await api.updateAvailability(prodId);
        const { message } = res.data;
        alert(message);
        history.go(0);
        dispatch({ type : "PRODUCT_AVAILABILITY" });
    } catch (error) {
        console.log(error.message)    
    }
}

export const putProduct = (prodId, newData, history) => async (dispatch) => {
    try {
        const res = await api.updateProduct(prodId, newData);
        const { data, message } = res.data;
        alert(message);
        history.push('/admin/products');
        dispatch({ type : "UPDATE_PRODUCT", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const removeProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteProduct(id);
        alert(data.message);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
    } catch (error) {
        console.log(error.message);    
    }
}