import data from "./data/data";

function App() {
  const data = data;
  return (
    <div>
      {data.map((book) => {
        return <div>{book}</div>;
      })}
    </div>
  );
}

export default App;
