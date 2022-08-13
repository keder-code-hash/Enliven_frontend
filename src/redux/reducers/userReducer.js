import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../actions/types";
let initialState = {
    token: localStorage.getItem("token"),
    user: null,
    auth: {
      isAdmin: false,
      isSTeahcer: false,
      isStudent: false
    },
    loading: null,
    success: null,
    error: null
};

const userReducer=(state=initialState,action)=>{
  switch(action.type){
    case REGISTER_USER_SUCCESS:
      console.log(action);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        auth: {
          // isAdmin: action.payload.user.isAdmTeacher,
          // isStudent: action.payload.user.isStudent,
          // isTeacher: action.payload.user.isAdmin
          isAdmin: false,
          isStudent: false,
          isTeacher: false
        },
        loading: false,
        error: null,
        success: action.payload.message
      };
    case REGISTER_USER_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        auth: {
          isAdmin: false,
          isSTeahcer: false,
          isStudent: false
        },
        loading: false,
        success: null,
        error: null
      };
    default:
      return state;
  }
}

export default userReducer;