import "./SingleCard.css";

export default function SingleCard({ card, handleTurns }) {
  const handleClick = () => {
    handleTurns(card);
  };

  return (
    <div>
      <div className="singleCard">
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
