import { Dispatch } from "redux";

import { CourseActionType, CourseActions,  } from "../../reducers/courseReducers/types";

import { Edit, GetAll, Incert } from "../../../services/api-course-service";
import { toast } from "react-toastify";




export const GetAllCourse = () => {  
  return async (dispatch: Dispatch<CourseActions>) => {
    try {
      dispatch({ type: CourseActionType.START_REQUEST });
      const data = await GetAll();
      const { response } = data;
      if (response.success) {
        dispatch({
          type: CourseActionType.ALL_COURSE_LOADED,
          payload: response,
        });
      }
    } catch {}
  }
  };
  
  export const EditCourse = (course: any) => {
    return async (dispatch: Dispatch<CourseActions>) => {
      try {
        dispatch({ type: CourseActionType.START_REQUEST });
        const data = await Edit(course);
        const { response } = data;
  
        if (response.success) {
          localStorage.removeItem("updateCourse");
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
        dispatch({
          type: CourseActionType.FINISH_REQUEST,
          payload: response.message,
        });
      } catch {}
    };
  };


  export const IncertCourse = (course: any) => {
    return async (dispatch: Dispatch<CourseActions>) => {
      try {
        dispatch({ type: CourseActionType.START_REQUEST });
        const data = await Incert(course);
        const { response } = data;
  
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
        dispatch({
          type: CourseActionType.FINISH_REQUEST,
          payload: response.message,
        });
      } catch {}
    };
  };
  