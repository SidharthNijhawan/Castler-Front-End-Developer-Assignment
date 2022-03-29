import React from "react";
import styles from "../src/styles.css";

export default function Info(props) {
  return (
    <div>
      {props.name && <h2 className="name_info_heading">Name : {props.name}</h2>}
      {props.email && (
        <h3 className="email_info_heading">Email : {props.email}</h3>
      )}
      {props.img && <img className="img_info_heading" src={props.img}></img>}
      {props.des && (
        <p className="des_info_heading">
          <b>Description</b> : {props.des}
        </p>
      )}
    </div>
  );
}
