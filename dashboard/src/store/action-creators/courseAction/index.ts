import { Dispatch } from "redux";

import { CourseActionType, CourseActions,  } from "../../reducers/courseReducers/types";

import { GetAll } from "../../../services/api-course-service";




export const GetAllCourse = () => {  
  return async (dispatch: Dispatch<CourseActions>) => {
    try {
      dispatch({ type: CourseActionType.START_REQUEST });
      const data = await GetAll();
      const { response } = data;
      console.log("ПРАЦЮЄ!!!!!!!!!!!!!!!!!!!", response);
      if (response.success) {
        dispatch({
          type: CourseActionType.ALL_COURSE_LOADED,
          payload: response,
        });
      }
    } catch {}
  }
  };
  
