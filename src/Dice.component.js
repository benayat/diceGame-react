import './style/dice.css';
import dice1 from './img/dice-1.png';
import dice2 from './img/dice-2.png';
import dice3 from './img/dice-3.png';
import dice4 from './img/dice-4.png';
import dice5 from './img/dice-5.png';
import dice6 from './img/dice-6.png';

const Dice = (props) => {
  const imagesArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [image1URL, image2URL] = [
    imagesArray[props.rollResult[0] - 1],
    imagesArray[props.rollResult[1] - 1],
  ];
  const images = [
    <img alt="first dice" src={image1URL} />,
    <img alt="second dice" src={image2URL} />,
  ];
  return <div className="diceContainer">{images}</div>;
};
export default Dice;
