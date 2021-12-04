import * as type from '../types'

export function getUsers(){
    return{
        type: type.GET_USERS_REQUESTED,
    }
}

export function setLoggedInUser(){
    return{
        type: type.SET_LOGGEDIN_USER
    }
}