import * as type from '../types'

export function getChallenges(filter){
    return{
        type: type.GET_CHALLENGES_REQUESTED,
        filter
    }
}