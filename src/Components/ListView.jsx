const ListView = ({ data, delTask, editTask }) => {
  return (
    <section className="list__view">
      {data.map((d, i) => (
        <div key={i} className="list__box">
          <p className="list__p">{d}</p>
          <button className="del__btn" onClick={() => delTask(i)}>
            del
          </button>

          <button className="edit__btn" onClick={() => editTask(i)}>
            edit
          </button>
        </div>
      ))}
    </section>
  );
};

export default ListView;
