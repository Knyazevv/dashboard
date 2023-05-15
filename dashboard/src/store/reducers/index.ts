import { combineReducers } from "redux";
import CourseReducer from "./courseReducers";
import UserReducer from "./userReducers";

export const rootReducer = combineReducers({
    UserReducer,
    CourseReducer
})

export type RootState = ReturnType<typeof rootReducer>;