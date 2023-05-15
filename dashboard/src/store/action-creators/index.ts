import * as UserActionCreators from "./userActions";
import * as CourseActionCreator from "./courseAction"

export default {
  ...UserActionCreators,
  ...CourseActionCreator

};
