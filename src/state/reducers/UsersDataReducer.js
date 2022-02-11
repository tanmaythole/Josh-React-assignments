const usersDataReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_USERS_DATA':
            return state.concat(action.payload)
        
        case 'RESET_DATA':
            return []
            
            default:
                return state
    }
}

export default usersDataReducer