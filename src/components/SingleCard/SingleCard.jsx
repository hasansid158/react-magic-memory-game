import "./SingleCard.css";

export default function SingleCard({ card }) {
  return (
    <div>
      <div className="singleCard">
        <img src={card.src} alt="card front" className="front" />
        <img src="/img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
}
