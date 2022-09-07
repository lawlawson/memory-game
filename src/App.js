import { useState } from 'react';
import './App.css';

const cardImages = [
  { src: 'img/helmet.png' },
  { src: 'img/potion.png' },
  { src: 'img/ring.png' },
  { src: 'img/scroll.png' },
  { src: 'img/shield.png' },
  { src: 'img/sword.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
