import { Dispatch } from "redux";
import { UserActionType, UserActions } from "../../reducers/userReducers/types";
import { 
    GetAll,
} from "../../../services/api-course-service";


import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";




export const GetAllCourses = () => {  
    return async (dispatch: Dispatch<UserActions>) => {
      try {
        dispatch({ type: UserActionType.START_REQUEST });
        const data = await GetAll();
        const { response } = data;
        console.log("response", response);
        if (response.success) {
          dispatch({
            type: UserActionType.ALL_USERS_LOADED,
            payload: response,
          });
        }
      } catch {}
    }
    };
  