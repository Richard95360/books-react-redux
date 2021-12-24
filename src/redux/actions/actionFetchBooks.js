import {

     FETCH_BOOKS_LOADING, 
     FETCH_BOOKS_SUCCESS, 
     FETCH_BOOKS_ERROR
    
    } from "../constants";
    import axios from 'axios'


    export const fetchBooksLoading = () => {
        return {
            type:FETCH_BOOKS_LOADING
        }
    }

   export  const fetchBooksSuccess = (data) => {
        return {
            type:FETCH_BOOKS_SUCCESS,
            payload: data
        }
    }

  export  const fetchBooksError = (err) => {
        return {
            type:FETCH_BOOKS_ERROR,
            payload:err
        }
    }

    const API_KEY ="AIzaSyCZKagNvDYpK0zf5OIF1oCBKYocX9siHq8";

    //GET https://www.googleapis.com/books/v1/volumes?q=TITRE&key=yourAPIKey&maxResults=20

    export const fetchBooks = title => {
        return dispatch  => {
            dispatch(fetchBooksLoading())

            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&KEY=${API_KEY}&maxResults=20
            `)
            .then(res => {
                const booksItemsArray = res.data.items;
               dispatch(fetchBooksSuccess(booksItemsArray))
            })
            .catch(err => {
               dispatch(fetchBooksError(err.message))
            })

        }
    }






