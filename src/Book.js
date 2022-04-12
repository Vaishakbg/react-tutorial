import React from "react";

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

export default Book;
