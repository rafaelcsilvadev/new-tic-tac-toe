import React from 'react';
import { connect } from 'react-redux';
import { PlayerState } from '../../store/players/types';
import { Section, BoxScore, ScoreStyle } from './styles';

interface StateProps {
  playerReducer: PlayerState;
}

interface Props {
  nextPlayer: boolean | string;
}

function Score({ playerState }: any, props: Props) {
  return (
    <Section>
      <BoxScore>
        <ScoreStyle color={props.nextPlayer ? '#3DF024' : '#fff'}>
          {playerState.players.player1}
        </ScoreStyle>
        <ScoreStyle>{playerState.score.player1}</ScoreStyle>
        <ScoreStyle>X</ScoreStyle>
        <ScoreStyle>{playerState.score.player2}</ScoreStyle>
        <ScoreStyle color={props.nextPlayer ? '#fff' : '#3DF024'}>
          {playerState.players.player2}
        </ScoreStyle>
      </BoxScore>
    </Section>
  );
}

function mapStateToProps(state: StateProps) {
  return {
    playerState: state.playerReducer,
  };
}

export default connect(mapStateToProps, null)(Score);
