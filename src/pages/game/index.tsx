import { Main, BoxScore, ScoreStyle, House, BoxButton } from "./styles";
import Button from "../../components/button";
import { connect } from "react-redux";
import { Player, Score } from "../../store/players/types";
import { useState } from "react";

export interface StateProps {
  playerReducer: {
    players: Player;
    score: Score;
  };
}

function Field(props: any) {
  return (
      <House onClick={props.onClick}>
        {props.text}
      </House>
  );
}

function Game({ playerState }: any) {
  const [field, setField] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState(playerState.players.symbol);

  const fillField = (fieldValue: number) => {
    const newField  = field.slice();
    newField[fieldValue] = symbol ? 'X' : 'O';
    
    setField(newField);
    setSymbol(!symbol);
  }
  
  return (
    <Main>
      <BoxScore>
        <ScoreStyle>{playerState.players.player1}:</ScoreStyle>
        <ScoreStyle>{playerState.score.player1}</ScoreStyle>
        <ScoreStyle>X</ScoreStyle>
        <ScoreStyle>{playerState.score.player2}</ScoreStyle>
        <ScoreStyle>:{playerState.players.player2}</ScoreStyle>
      </BoxScore>
      <div>
        <div>
          <Field text={field[0]} onClick={() => fillField(0)} />
          <Field text={field[1]} onClick={() => fillField(1)} />
          <Field text={field[2]} onClick={() => fillField(2)} />
        </div>
        <div>
          <Field text={field[3]} onClick={() => fillField(3)} />
          <Field text={field[4]} onClick={() => fillField(4)} />
          <Field text={field[5]} onClick={() => fillField(5)} />
        </div>
        <div>
          <Field text={field[6]} onClick={() => fillField(6)} />
          <Field text={field[7]} onClick={() => fillField(7)} />
          <Field text={field[8]} onClick={() => fillField(8)} />
        </div>
      </div>
      <BoxButton>
        <Button bgColor="#47B821" children="Novo Jogo" />
        <Button bgColor="#47B821" children="Mudar Jogadores" />
      </BoxButton>
    </Main>
  );
}

function mapStateToProps(state: StateProps) {
  return {
    playerState: state.playerReducer,
  };
}

export default connect(mapStateToProps, null)(Game);
