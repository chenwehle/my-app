import './App.css';
import MyRGBPanel from './component/rgb-panel/MyRGBPanel'
import MyCalulator from './component/calculator/MyCalculator';
import MySlider from './component/rgb-panel/MySlider';
import TicTacToe from './component/tic-tac-toe/tictactoe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>4b0g0017陳俊霖:Hello React!</h1>
        <h2>MySlider</h2>
        <MySlider />
        <h2>MyRGBPanel</h2>
        <MyRGBPanel />
        <h2>MyCalculator</h2>
        <MyCalulator />
        <h2>Tic-Tac-Toe Game</h2>
        <TicTacToe />
      </header>
    </div>
  );
}

export default App;
