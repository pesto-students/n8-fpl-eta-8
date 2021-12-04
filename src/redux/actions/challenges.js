import * as type from '../types'

export function getChallenges(){
    return{
        type: type.GET_CHALLENGES_REQUESTED,
    }
}