import * as type from '../types';

const initialState = {
    challenges: [],
    loading: null,
    error: null
}

export default function challenges(state = initialState, action ){
    switch(action.type){
        case type.GET_CHALLENGES_REQUESTED:
            return {
                ...state,
                loading:true,
            }
        case type.GET_CHALLENGES_SUCCESS:
            return {
                ...state,
                loading:false,
                challenges:action.challenges
            }
        case type.GET_CHALLENGES_FAILED:
            return{
                ...state,
                loading:false,
                error:action.message
            }
        case type.GET_USERS:
            return{
                ...state, 
                challenges:action.payload
            }
        
            default:
                return state;
    }
}