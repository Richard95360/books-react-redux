import { reducerAddBooks } from "./reducers/reducerAddBooks";
import { reducerFetchBooks} from "./reducers/reducerFetchBooks"
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    library: reducerAddBooks,
    search:reducerFetchBooks
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store