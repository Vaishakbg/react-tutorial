import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ishaan",
    age: 3,
    message: "random msg",
  });

  const [name, setName] = useState("Ishaan");
  const [age, setAge] = useState(3);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("Message changed");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
