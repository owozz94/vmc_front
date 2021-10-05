import { createAction, handleActions } from "redux-actions";
//액션 타입을 상수 변수로 정의
const SETACCESSTOKEN = "id/SETACCESSTOKEN";
//액션 생성자
export const setAccessToken = createAction(SETACCESSTOKEN);
//초기 상태값
const initialState = {
  accessToken: "",
};
//현재값을 state에 저장
export default handleActions(
  {
    //첫 번째 파라미터 : 액션에 따라 실행할 함수들을 가지고 있는 객체
    //두 번째 파라미터 : 상태의 기본값
    [SETACCESSTOKEN]: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
  },
  initialState
);
