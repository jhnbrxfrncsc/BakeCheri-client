

const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH_ORDERS":
            return payload;
        
        case "NEW_ORDER":
            return [...state, payload];
        
        case "USER_ORDERS":
            return [...state, payload];

        default:
            return state;
    }
}

export default reducer;