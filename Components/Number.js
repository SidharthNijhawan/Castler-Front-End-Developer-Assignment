import React, { useState } from "react";
import Info from "./Info";
import styles from "../src/styles.css";
export default function Number() {
  const [number, setNumber] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [userimg, setUserImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setNumber(event.target.value);
  }

  // making call to the api so that can get numbers also validations a re handled here if a users
  //  enter a number out of range of 1 and 12 then an alert would be genrated saying number should
  //  be in the range

  function getData() {
    {
      number >= 1 && number <= 12
        ? fetch(`https://reqres.in/api/users/${number}`)
            .then((results) => results.json())
            .then((data) => {
              const email = data.data.email;
              const fname = data.data.first_name;
              const lname = data.data.last_name;
              const img = data.data.avatar;
              setUsername(`${fname}${lname}`);
              setUserEmail(email);
              setUserImage(img);
              setDescription(`Hello everyone My id is ${data.data.id}`);
            })
            .catch((error) => {
              console.log(error);
              alert(`check information from the api`);
            })
        : alert("enter a valid value in input");
    }
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <label className="text">Please Enter Number (Between 1 and 12)</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="12"
          onChange={handleChange}
        ></input>
        <input
          className="info"
          type="submit"
          value="Info"
          onClick={getData}
        ></input>
      </form>
      <Info name={username} email={email} img={userimg} des={description} />
    </div>
  );
}
