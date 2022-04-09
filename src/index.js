import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg",
    title: "It's Not Easy Being a Bunny (Beginner Books(R))",
    author: "Marilyn Sadler",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81DSi4ECwyL._AC_UL604_SR604,400_.jpg",
    title:
      "The Mothers and Daughters of the Bible Speak: Lessons on Faith from Nine Biblical Families",
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
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2 className="book-title">{title}</h2>
      <span className="author">{author.toUpperCase()}</span>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
