export interface CourseState {
    allCourse: any;
    loading: boolean;
    message: string;    
    course: any;
 
  }
  
  export enum CourseActionType {
    START_REQUEST = "START_REQUEST",
    ALL_COURSE_LOADED = "ALL_COURSE_LOADED",  
    FINISH_REQUEST = "FINISH_REQUEST",   
    COURSE_UPDATED = "COURSE_UPDATED",
  }


  interface StartRequestAction {
    type: CourseActionType.START_REQUEST;
  }
  
  
  interface AllCourseLoadedAction {
    type: CourseActionType.ALL_COURSE_LOADED;
    payload: any;
  }
  

  
  interface FinishRequestAction {
    type: CourseActionType.FINISH_REQUEST;
    payload: any;
  }
  

  interface CourseEditedAction {
    type: CourseActionType.COURSE_UPDATED;
    payload: any;
  }


  export type CourseActions =
   
  | StartRequestAction
  | CourseEditedAction
  | AllCourseLoadedAction
  | FinishRequestAction;
  