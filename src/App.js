import "./App.css";
import InputForm from "./Components/InputFrom";
import ListView from "./Components/ListView.jsx";
import EditForm from "./Components/EditForm.jsx";
import { useState } from "react";
function App() {
  const [data, setData] = useState(["aqsa", "ijaz"]);
  const [edit, setEdit] = useState(false);
  const [indexNum, setIndexNum] = useState();
  const DataList = (val) => {
    setData((old) => [...data, val]);
  };
  const delTask = (index) => {
    const newData = data.filter((d, i) => {
      if (i !== index) return d;
    });
    setData(newData);
  };
  const editTask = (index) => {
    setEdit(true);
    setIndexNum(index);
  };
  const updateData = (val) => {
    const result = data.map((d, i) => {
      if (i === indexNum) {
        d = val;
        return d;
      }
      return d;
    });
    setEdit(false);
    setData(result);
  };
  if (!edit)
    return (
      <div className="App">
        <InputForm DataList={DataList} />
        <ListView data={data} delTask={delTask} editTask={editTask} />
      </div>
    );
  else {
    return (
      <div>
        <InputForm />
        <EditForm updateData={updateData} />
      </div>
    );
  }
}

export default App;
