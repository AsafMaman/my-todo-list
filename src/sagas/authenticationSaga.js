import {takeEvery} from "redux-saga"
import {call,put} from "redux-saga/effects"
import {types} from '../modules/authentication'
import authenticationService from "../services/authenticationService"

function* watchLoginRequest(){
    yield* takeEvery(types.LOGIN_REQUEST,loginRequest)
}

function* loginRequest(action){
    var service=new authenticationService()
    var auth=yield call(service.isAuthenticate,action.payload.user,action.payload.password)

    console.log(auth.authenticate)

    if(auth.authenticate){
        yield put({type:types.LOGIN_SUCCESS,payload:{user:"Test",name:"test name"}})
    }
    else{
        yield put({type:types.LOGIN_FAILURE,payload:{user:"Test",name:"test name"}})
    }
    
}

export default watchLoginRequest


