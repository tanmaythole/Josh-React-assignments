const blogsReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_BLOGS":
            return action.payload
        
        default:
            return state
    }
}
export default blogsReducer;