import { Main, BoxScore, ScoreStyle, House, BoxButton } from "./styles";
import Button from "../../components/button";
import { connect } from "react-redux";
import { Player, Score } from "../../store/players/types";

interface StateProps {
  playerReducer: {
    players: Player;
    score: Score;
  };
}

function Field() {
  return (
    <div>
      <House>X</House>
      <House>X</House>
      <House>X</House>
    </div>
  );
}

function Game({ player }: any) {
  return (
    <Main>
      <BoxScore>
        <ScoreStyle>{player.players.player1}:</ScoreStyle>
        <ScoreStyle>{player.score.player1}</ScoreStyle>
        <ScoreStyle>X</ScoreStyle>
        <ScoreStyle>{player.score.player2}</ScoreStyle>
        <ScoreStyle>:{player.players.player2}</ScoreStyle>
      </BoxScore>
      <div>
        <Field />
        <Field />
        <Field />
      </div>
      <BoxButton>
        <Button children="Novo Jogo" />
        <Button children="Mudar Jogadores" />
      </BoxButton>
    </Main>
  );
}

function mapStateToProps(state: StateProps) {
  return {
    player: state.playerReducer,
  };
}

export default connect(mapStateToProps, null)(Game);
