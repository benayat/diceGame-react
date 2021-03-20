import './style/PlayerScoreCard.css';
import { AvatarGenerator } from 'random-avatar-generator';

import React, { Component } from 'react';

//state: score so far.
//all the rest: uncontroled.
const generator = new AvatarGenerator();

class PlayerScoreCard extends Component {
  constructor(props) {
    super(props);
    this.avatar = generator.generateRandomAvatar();

    this.state = {
      currentScore: 0,
    };
  }
  //if parent element changes the score - it will immediately be updated here.
  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props) !== JSON.stringify(prevProps))
      this.setState({ currentScore: this.props.currentScore });
  }

  render() {
    return (
      <div className="playerScoreCard">
        <img className="avatar" alt="avatar" src={this.avatar} />
        <h5 className="playerName">{this.props.playerName}</h5>
        <div className="scoreKeeper">
          <h2 className="currentScore">score:{this.state.currentScore}</h2>
          <h2 className="wins">wins:{this.props.wins}</h2>
        </div>
      </div>
    );
  }
}
export default PlayerScoreCard;
