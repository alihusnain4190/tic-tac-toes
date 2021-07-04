
const ListView = ({ data, delTask, editTask }) => {
  return (
    <section>
      {data.map((d, i) => (
        <div>
          {d}
          <button onClick={() => delTask(i)}>del</button>

          <button onClick={() => editTask(i)}>edit</button>
        </div>
      ))}
    </section>
  );
};

export default ListView;
