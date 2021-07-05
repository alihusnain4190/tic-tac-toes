import React from "react";
import { useState,  } from "react";
const EditView = ({ updateData, cancelData }) => {
  const [data, setData] = useState("");
  const inputChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  return (
    <div>
      <section>
        <input type="text" onChange={inputChange}></input>
        <button
          onClick={() => {
            updateData(data);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            cancelData();
          }}
        >
          cancel
        </button>
      </section>
    </div>
  );
};

export default EditView;
