import {combineReducers, createStore} from "redux";
import {AuthReducer} from "./b1-authReducer";


const reducers = combineReducers({
    auth: AuthReducer

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
