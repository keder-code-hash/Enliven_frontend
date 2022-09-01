import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS,
          LOGIN_USER_FAILURE,LOGIN_USER_SUCCESS,
          LOGOUT_USER_SUCCESS,LOGOUT_USER_FAILURE  
}
from "../actions/types";

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
      localStorage.setItem("token",action.payload.token);
      localStorage.setItem("refreshToken",action.payload.user.refreshToken);
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
      localStorage.removeItem("refreshToken");
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
        success:action.payload.message,
        error: null
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token",action.payload.token);
      localStorage.setItem("refreshToken",action.payload.user.refreshToken);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        auth: {
          // isAdmin: action.payload.user.isAdmTeacher,
          // isTeacher: action.payload.user.isAdmin
          isAdmin: false,
          isStudent: true,
          isTeacher: false
        },
        loading: false,
        error: null,
        success: action.payload.message
      }
    case LOGIN_USER_FAILURE:
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        token: null,
        user: null,
        auth: {
          // isAdmin: action.payload.user.isAdmTeacher,
          // isTeacher: action.payload.user.isAdmin
          isAdmin: false,
          isStudent: true,
          isTeacher: false
        },
        loading: false,
        error: null,
        success: action.payload.message
      }
      case LOGOUT_USER_SUCCESS: 
        return {
          ...state,
          token: null,
          user: null,
          auth: {
            // isAdmin: action.payload.user.isAdmTeacher,
            // isTeacher: action.payload.user.isAdmin
            isAdmin: false,
            isStudent: false,
            isTeacher: false
          },
          loading: false,
          error: null,
          success: null
        }
      case LOGOUT_USER_FAILURE: 
        return {
          ...state,
          token: null,
          user: null,
          auth: {
            // isAdmin: action.payload.user.isAdmTeacher,
            // isTeacher: action.payload.user.isAdmin
            isAdmin: false,
            isStudent: false,
            isTeacher: false
          },
          loading: false,
          error: null,
          success: null
        }
    default:
      return state;
  }
}

export default userReducer;