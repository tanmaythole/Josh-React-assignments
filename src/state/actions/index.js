export const login = (e) => {
    return {
        type: 'LOGIN'
    }
}

export const logout = (e) => {
    return {
        type: 'LOGOUT'
    }
}

export const addUsersData = (data) => {
    return {
        type: "ADD_USERS_DATA",
        payload: data
    }
}

export const resetData = (data) => {
    return {
        type: "RESET_DATA"
    }
}

export const userDetails = (data) => {
    return {
        type: "USER_DETAILS",
        payload: data
    }
}