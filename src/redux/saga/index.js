import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import challengeSaga from './challengeSaga';


export default function* rootSaga(){
    yield all ([
        userSaga(),
        challengeSaga()
    ])
}