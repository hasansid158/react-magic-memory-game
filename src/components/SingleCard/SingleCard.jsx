import "./SingleCard.css";

export default function SingleCard({
  card,
  handleTurns,
  flipped = false,
  disabled,
}) {
  const handleClick = () => {
    console.log(disabled, " DISDISDS");
    if (!disabled) {
      handleTurns(card);
    }
  };

  return (
    <div>
      <div className="singleCard">
        <img
          src="/img/cover.png"
          alt="card back"
          className={["back", flipped ? "backFlipped" : ""].join(" ")}
          onClick={handleClick}
        />
        <img
          src={card.src}
          alt="card front"
          className={["front", flipped ? "flipped" : ""].join(" ")}
        />
      </div>
    </div>
  );
}
