import { useState } from "react";
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

  const startNewGame = () => {
    const randomCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(randomCards);
    setTurns(0);
    console.log(randomCards);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={startNewGame}>New Game</button>

      <div className="cardContainer">
        {cards.map((card) => {
          return <SingleCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default App;
