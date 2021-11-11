import { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard/SingleCard";

function App() {
  const cardImages = [
    { src: "/img/helmet-1.png" },
    { src: "/img/potion-1.png" },
    { src: "/img/ring-1.png" },
    { src: "/img/scroll-1.png" },
    { src: "/img/shield-1.png" },
    { src: "/img/sword-1.png" },
  ];

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstTurn, setFirstTurn] = useState(null);
  const [secondTurn, setSecondTurn] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const startNewGame = () => {
    const randomCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));

    setCards(randomCards);
    setTurns(0);
    console.log(randomCards);
  };

  //check if both selected
  const handleTurns = (card) => {
    firstTurn ? setSecondTurn(card) : setFirstTurn(card);
  };

  //compare selected card
  useEffect(() => {
    if (firstTurn && secondTurn) {
      setDisabled(true);
      setTurns((prevTurn) => prevTurn + 1);

      if (firstTurn.src === secondTurn.src) {
        console.log("Matched !");
        resetTurn(0);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstTurn.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        console.log("didnt match !");
        resetTurn(800);
      }
    }
  }, [firstTurn, secondTurn]);

  const resetTurn = (timer) => {
    setTimeout(() => {
      setFirstTurn(null);
      setSecondTurn(null);
      setDisabled(false);
    }, timer);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startNewGame}>New Game</button>

      <div className="cardContainer">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleTurns={handleTurns}
              flipped={
                card === firstTurn || card === secondTurn || card.matched
              }
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
