const usersDataReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_USERS_DATA':
            return state.concat(action.payload)
        
            default:
                return state
    }
}

export default usersDataReducer