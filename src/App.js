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
  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
