import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR

} from '../constants';

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    err: ''
}

export const reducerFetchBooks = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true
            }
            case FETCH_BOOKS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                        fetchedBooks: action.payload,
                        err: ''
                }
                case FETCH_BOOKS_ERROR:
                    return {
                        ...state,
                        isLoading: false,
                            fetchedBooks: [],
                            err:action.payload
                    }

                    default:
                        return state
    }

}