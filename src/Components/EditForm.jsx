import React from "react";
import { useState } from "react";
const EditView = ({ updateData, cancelData }) => {
  const [data, setData] = useState("");
  const inputChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  return (
    <div>
      <section className="edit">
        <input
          className="edit__input"
          type="text"
          onChange={inputChange}
        ></input>
        <button
          className="edit__btn"
          onClick={() => {
            updateData(data);
          }}
        >
          Save
        </button>
        <button
          className="del__btn"
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
