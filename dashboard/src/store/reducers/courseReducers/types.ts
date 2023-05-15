export interface CourseState {
    allCourse: any;
    loading: boolean;
    message: string; 
    selectedCourse: any;
    course: any;
   
  }
  
  export enum CourseActionType {
    START_REQUEST = "START_REQUEST",
    ALL_COURSE_LOADED = "ALL_COURSE_LOADED",
    FINISH_REQUEST = "FINISH_REQUEST",   
    COURSE_PROFILE_LOADED = "COURSE_PROFILE_LOADED",
    SELECTED_COURSE = "SELECTED_COURSE",
  
    COURSE_UPDATED = "COURSE_UPDATED"
  }
  
  interface SelectCourseAction {
    type: CourseActionType.SELECTED_COURSE;
    payload: any;
  }
  
  interface UserProfileLoadedAction {
    type: CourseActionType.COURSE_PROFILE_LOADED;
    payload: any;
  }
  

  interface StartRequestAction {
    type: CourseActionType.START_REQUEST;
  }
  

  
  interface FinishRequestAction {
    type: CourseActionType.FINISH_REQUEST;
    payload: any;
  }
  

  
  interface AllCourseLoadedAction {
    type: CourseActionType.ALL_COURSE_LOADED;
    payload: any;
  }
  
  export type CourseActions =
   
    | FinishRequestAction
    | StartRequestAction
    | UserProfileLoadedAction    
    | SelectCourseAction
    | AllCourseLoadedAction;
  