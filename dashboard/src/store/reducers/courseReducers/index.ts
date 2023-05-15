import { CourseActionType, CourseState, CourseActions } from "./types";

const initialState: CourseState = {
  allCourse: [],
  loading: false,
  message: "",  
  course: {}, 
  selectedCourse: null,
};


const CourseReducer = (state = initialState, action: CourseActions): CourseState => {
    
    switch (action.type) {
      case CourseActionType.START_REQUEST:
        return { ...state, loading: true };
      case CourseActionType.ALL_COURSE_LOADED:
        return { ...state, loading: false, allCourse: action.payload.payload };
        
      case CourseActionType.FINISH_REQUEST:
        return { ...state, loading: false, message: action.payload };
    
      default:
        return state;
    }
  };
  
  export default CourseReducer;