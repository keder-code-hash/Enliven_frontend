import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// const middleware = [thunk];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // composeWithDevTools(applyMiddleware(...middleware))
  )
);

export default store;
