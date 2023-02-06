import './App.css';
import Apple from './components/Apple';
import Body from './components/Body';
import Head from './components/Head';
import { useState, useEffect } from 'react';

//on the board, each square is 50px.
//render a square board with 14 number of squares --> styling.
//top left of hte board is (0, 0)

//hold state here for Apple, body, head

function App() {

  const [appleCoords, setAppleCoords] = useState(App.generateNewPosition());
  const [snakeCoords, setSnakeCoords] = useState([[300, 300]]);

  useEffect(() => {
    console.log('in useEffect');
    // setAppleCoords(generateNewPosition());
  }, []);

  return (
    <div className='App'>
      <div id='board' data-testid='board'>
        <Apple appleCoords={appleCoords} />
        <Head
          snakeCoords={snakeCoords}
          setSnakeCoords={setSnakeCoords}
          appleCoords={appleCoords}
          setAppleCoords={setAppleCoords}
        />
      </div>
    </div>
  );
}

App.generateNewPosition = function (snakeCoords = [300,300]) {
  //apple generates at the start of hte game with a random static position
  const getRandomPosition = () => {
    let randomNum = Math.floor(Math.random() * 14);
    let coordinates = randomNum * 50;
    return coordinates;
  };
  const x = getRandomPosition();
  const y = getRandomPosition();
  const tempCoords = [x, y];
  //create a random number for x and y coords, between 0 and 650. each square is 50px, total 13 squares
  // if (snakeCoords[0] === tempCoords) {
  // }
  //coords cannot match what they were previously
  //coords cannot match the coords of the snake
  console.log('tempCoords', tempCoords);

  return tempCoords;
};


export default App;