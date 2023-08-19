import React, { useEffect, useState } from "react";
import data from "./../../book.json";

// interface Book {
//   title: string;
//   author: string[];
//   genre: string;
//   publicationYear: number;
//   publisher: {
//     name: string;
//     location: string;
//   };
//   reviews: {
//     user: string;
//     comment: string;
//   }[];
//   rating: number;
//   price: string;
// }

const SingleBook = () => {
  //   const [books, setBooks] = useState<Book[]>([]);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("book.json")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data)); // Update the state with fetched data
  //   }, []);

  return (
    <div>
      <h4>Books</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          marginLeft: "30px",
        }}
      >
        {data.map((book, index) => (
          <div
            key={index}
            style={{
              width: "350px",
              height: "auto",
              border: "2px solid green",
            }}
          >
            <h5>{book.title}</h5>
            <p>Authors: {book.author.join(", ")}</p>
            <p>Genre: {book.genre}</p>
            <p>Publication Year: {book.publicationYear}</p>
            <p>
              Publisher: {book.publisher.name} ({book.publisher.location})
            </p>
            <p>Rating: {book.rating}</p>
            <p>Price: ${book.price}</p>
            <h6>Reviews:</h6>
            <ul>
              {book.reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <strong>{review.user}</strong>: {review.comment}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBook;
