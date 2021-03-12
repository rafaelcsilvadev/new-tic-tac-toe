import React from 'react';
import { connect } from 'react-redux';
import { PlayerState } from '../../store/players/types';
import { Section, BoxScore, ScoreStyle } from './styles';

interface StateProps {
  playerReducer: PlayerState;
}

const Score: React.FC = ({ playerState }: any) => (
  <Section>
    <BoxScore>
      <ScoreStyle color={playerState.players.symbol ? '#44D420' : '#ffffff'}>
        {playerState.players.player1}
      </ScoreStyle>
      <ScoreStyle color={playerState.players.symbol ? '#44D420' : '#ffffff'}>
        {playerState.score.player1}
      </ScoreStyle>
      <ScoreStyle>X</ScoreStyle>
      <ScoreStyle color={playerState.players.symbol ? '#ffffff' : '#44D420'}>
        {playerState.score.player2}
      </ScoreStyle>
      <ScoreStyle color={playerState.players.symbol ? '#ffffff' : '#44D420'}>
        {playerState.players.player2}
      </ScoreStyle>
    </BoxScore>
  </Section>
);

const mapStateToProps = (state: StateProps) => ({
  playerState: state.playerReducer,
});

export default connect(mapStateToProps, null)(Score);
