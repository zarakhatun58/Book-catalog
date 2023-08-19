// src/redux/reducers/bookReducer.ts

import { FETCH_BOOKS_SUCCESS } from "../action/bookaction";

interface Book {
  id: string;
  title: string;
  author: string;
  // Add more properties as needed
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

const bookReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
