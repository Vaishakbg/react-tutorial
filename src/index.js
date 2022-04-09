import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="book-list">
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg"
        title="It's Not Easy Being a Bunny (Beginner Books(R))"
        author="Marilyn Sadler"
      />
      <Book
        image="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg"
        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
        author="James Clear"
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt="book" width={200} />
      <h2 className="book-title">{props.title}</h2>
      <p className="author">{props.author.toUpperCase()}</p>
      <span>{2 * 45}</span>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
