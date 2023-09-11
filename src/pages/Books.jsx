import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");

        setBooks(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/book/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Roi Book</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.img && <img src={book.img} />}
            <h1>{book.title} </h1>
            <p> {book.desc} </p>

            <span>{book.price} </span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/post"> Add New Book</Link>
      </button>
    </div>
  );
};

export default Books;
