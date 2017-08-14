import {fork} from "redux-saga/effects"
import watchLoginRequest from "./authenticationSaga"
function* rootSaga(){
    yield[
        fork(watchLoginRequest)
    ]
    
}

export default rootSaga