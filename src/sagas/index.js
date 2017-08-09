import {fork} from "redux-saga/effects"
import watchAuthenticateUser from "./authenticationSaga"
function* rootSaga(){
    yield[
        fork(watchAuthenticateUser)
    ]
    
}

export default rootSaga