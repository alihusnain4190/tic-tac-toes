import { useState } from "react";
import React from "react";

const InputFrom = ({ DataList }) => {
  const [data, setData] = useState("");
  const inputChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  const handleData = () => {
    DataList(data);
  };
  return (
    <section>
      <input type="text" onChange={inputChange}></input>
      <button onClick={handleData}>Add</button>
    </section>
  );
};

export default InputFrom;
