import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg",
    title: "It's Not Easy Being a Bunny",
    author: "Marilyn Sadler",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81DSi4ECwyL._AC_UL604_SR604,400_.jpg",
    title: "The Mothers and Daughters of the Bible Speak",
    author: "Shannon Bream",
  },
];

function BookList() {
  return (
    <section className="book-list">
      {/* {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })} */}
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  // attribute, eventHandler
  // onclick, OnMouseOver
  const clickHandler = (e) => {
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="book" />
      <h2 className="book-title">{title}</h2>
      <span className="author" style={{ display: "block" }}>
        {author.toUpperCase()}
      </span>
      <button type="button" onClick={clickHandler}>
        button
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
