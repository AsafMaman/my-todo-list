import {takeEvery} from "redux-saga"
import {call,put} from "redux-saga/effects"
import authenticationService from "../services/authenticationService"

function* watchAuthenticateUser(){
    yield* takeEvery('AUTHENTICATE_USER',authenticateUser)
}

function* authenticateUser(){
    var service=new authenticationService();
    var auth=yield call(service.isAuthenticate,'user','pass')
    var temp1=temp
    if(auth.authenticated){
        yield put({type:'USER_AUTHENTICATTION_SUCCEEDED',payload:{user:"Test",name:"test name"}})
    }
    else{
        yield put({type:'USER_AUTHENTICATTION_FAILED',payload:{user:"Test",name:"test name"}})
    }
    
}

export default watchAuthenticateUser


