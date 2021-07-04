import React from "react";
import { useState } from "react";
const EditView = ({ updateData }) => {
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
      </section>
    </div>
  );
};

export default EditView;
