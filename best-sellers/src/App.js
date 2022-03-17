import Header from "./components/Header/Header";
import data from "./data/data";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <div className="card-container">
        {data.map((book, index) => {
          return <Card book={book} num={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
