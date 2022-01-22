

const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH_ALL":
            return payload;

        case "CREATE_PRODUCT":
            return [...state, payload];

        case "PRODUCT_AVAILABILITY":
            return state;

        case "UPDATE_PRODUCT":
            return state;
        
        case "DELETE_PRODUCT" :
            return state.filter((data) => data._id !== payload);

        default:
            return state;
    }
}

export default reducer;