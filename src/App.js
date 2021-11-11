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

  const startNewGame = () => {
    const randomCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(randomCards);
    setTurns(0);
    console.log(randomCards);
  };

  const handleTurns = (card) => {
    firstTurn ? setSecondTurn(card) : setFirstTurn(card);
  };

  useEffect(() => {
    if (firstTurn && secondTurn) {
      setTurns((prevTurn) => prevTurn + 1);
      if (firstTurn.src === secondTurn.src) {
        console.log("Matched !");
      } else {
        console.log("didnt match !");
      }
      resetTurn();
      console.log(turns);
    }
  }, [firstTurn, secondTurn]);

  const resetTurn = () => {
    setFirstTurn(null);
    setSecondTurn(null);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startNewGame}>New Game</button>

      <div className="cardContainer">
        {cards.map((card) => {
          return (
            <SingleCard key={card.id} card={card} handleTurns={handleTurns} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
