import React, {useEffect} from 'react';
import App, {generateNewPosition} from '../App';


export default function Head({ snakeCoords, setSnakeCoords, appleCoords }) {
  const position = snakeCoords[0];
  const style = {
    left: `${position[0]}px`,
    top: `${position[1]}px`,
  };

 useEffect(() => {  
 }, [snakeCoords])
 
  
const moveSnake = (currDirection) => {
    let x
    let y
  //head has to move automatically at a set interval
    //just for a test, make hte head move automtically to the right (+50 x every time)
    // implement speed variable later
  // let newHead = setTimeout(()=>{},500)
  //when an arrow is pressed down, change the direction of the head (first element in the snakeCoords)
  //check if new position matches appleCoords
  //if yes, invoke eatApple(), increase score
  let headPosition = snakeCoords.shift();
  if (currDirection == 'right') {
    x = headPosition[0] + 50
    headPosition[0] = x
  }
//   if (currDirection == 'left') {
//     x = headPosition + 50
//   }
  setSnakeCoords(
    [headPosition,...snakeCoords]
  )
}

const eatApple = () => {
    
    //   function generateNewApple() {  
//     generateNewPosition()
//   }
    //when snake eat the apple, 
        //generate new apple
        // if the new apple is on the snake (head or body) || previous apple , generate new apple again
    
  }
  
  return (
    <div data-testid='head' id='head' style={style} >Head</div>
  );
}
