import React from "react";
import { createRoot } from "react-dom/client";
import Book from "./Book";
import { Greeting } from "./testing/testing";

import { books } from "./books";

import "./index.css";

function BookList() {
  console.log(Greeting);
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
