import {combineReducers} from "redux"
import todo from "../todo/todoReducers"

const rootReducer = combineReducers({
    todo
})

export default rootReducer
