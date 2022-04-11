import React from "react";
import { createRoot } from "react-dom/client";

import { books } from "./books";

import "./index.css";

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
