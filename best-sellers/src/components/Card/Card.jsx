import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="num">{props.num + 1}</p>
      <p className="sub">{props.book.sub}</p>
      <h2 className="title">{props.book.title}</h2>
      <section className="text">{props.book.text}</section>
      <button className="book-button">
        read more
        <span className="material-icons arrow">arrow_forward</span>
      </button>
    </div>
  );
};

export default Card;
