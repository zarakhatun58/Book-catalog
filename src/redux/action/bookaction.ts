// src/redux/actions/bookActions.ts

import { Dispatch } from "redux";
import { firestore } from "../../firebaseConfig";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";

export const fetchBooks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const booksRef = firestore.collection("books");
      const snapshot = await booksRef.get();
      const booksData = snapshot.docs.map((doc: any) => doc.data());
      dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData });
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };
};
