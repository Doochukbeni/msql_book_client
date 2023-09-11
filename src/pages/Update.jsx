import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    desc: "",
    price: null,
    img: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleSubmit = (e) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/books/" + bookId, newBook);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newBook);

  return (
    <div className="form">
      <h1>Update Your Book</h1>
      <form action="">
        <input
          type="text"
          placeholder="title"
          onChange={handleSubmit}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleSubmit}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleSubmit}
          name="price"
        />
        <input
          type="file"
          placeholder="img"
          onChange={handleSubmit}
          name="img"
        />
        <button className="form__button" onClick={handleClick}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
