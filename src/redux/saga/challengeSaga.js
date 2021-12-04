import { call, put, takeEvery} from 'redux-saga/effects';

const apiUrl = `${process.env.REACT_APP_API_SERVER}/api/challenge/`;

function getApi(filter){

    const url = filter === 'all' ? apiUrl+'all': apiUrl+'filter/'+filter;  
    console.log('getChallenges api', url);
    return fetch(url,{
        method:'get',
        headers :{
            'Content-Type':'application/json',
        }
    })
        .then( response => {
            return response.json()
        })
        .catch( error => {throw error;})
}

function* fetchChallenges(action) {
    
    try{
        const challenges = yield call(() => getApi(action.filter));
        yield put({type:'GET_CHALLENGES_SUCCESS', challenges:challenges});
    } catch(e) {
        yield put({type: 'GET_CHALLENGES_ADDED', message: e.messages});
    }
}

function* challengeSaga(){
    yield takeEvery('GET_CHALLENGES_REQUESTED', fetchChallenges)
}

export default challengeSaga;