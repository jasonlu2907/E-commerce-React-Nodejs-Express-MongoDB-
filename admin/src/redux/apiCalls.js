import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", userInfo);
    dispatch(loginSuccess(res.data));
    
  } catch (error) {
    dispatch(loginFailure());
  }
}