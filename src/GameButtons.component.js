import './style/GameButton.css';
import { Component } from 'react';

/*
 *expected parent handlers: newGame, rollDice, endTurn.
 */
class GameButtons extends Component {
  // constructor(props) {
  //   super(props);
  // }
  onClick(event) {
    debugger;
    const type = event.target.id;
    switch (type) {
      case 'newGame':
        this.props.newGame();
        break;
      case 'rollDice':
        this.props.rollDice();
        break;
      case 'hold':
        this.props.hold();
        break;
      case 'exitGame':
        this.props.exitGame();
        break;

      default:
        break;
    }
    return;
  }
  render() {
    return [
      <button id="newGame" type="button" onClick={this.onClick.bind(this)}>
        new game
      </button>,
      <button id="rollDice" type="button" onClick={this.onClick.bind(this)}>
        Rock'n Roll!
      </button>,
      <button id="hold" type="button" onClick={this.onClick.bind(this)}>
        HOLD it!
      </button>,
      <button id="exitGame" type="button" onClick={this.onClick.bind(this)}>
        that's it
      </button>,
    ];
  }
}
export default GameButtons;
