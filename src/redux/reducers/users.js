

const reducer = (state = { loginDetails : null }, { type, payload }) => {
    switch (type) {
        case "FETCH_USERS":
            return { ...state, users: payload };
        
        case "LOGIN_USER":
            return { ...state, loginDetails: payload };
        
        case "GET_USER" :
            return { ...state, loginDetails: payload };
        
        case "REGISTER_USER" :
            return state;
        
        case "CHANGE_ROLE" :
            return state;
        
        case "ADD_CART_ITEM" :
            return state;
        
        case "DELETE_CART_ITEM" :
            return state;
        
        case "DELETE_USER" :
            return {...state, users: state.users.filter(user => user._id !== payload)};
        
        case "LOGOUT_USER" :
            return { ...state, loginDetails: null };

        default:
            return state;
    }
}

export default reducer;