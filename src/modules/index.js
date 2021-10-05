import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import user from "./Reducer.js";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  //localStorage에 저장.
  storage,
};
//여러 리듀서를 합침
const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
