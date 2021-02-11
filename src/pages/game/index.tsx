import { Main, BoxScore, ScoreStyle, House, BoxButton } from "./styles";
import Button from "../../components/button";
import { connect } from "react-redux";
import { Player, PlayerState, Score } from "../../store/players/types";

function Field() {
  return (
    <div>
      <House>X</House>
      <House>X</House>
      <House>X</House>
    </div>
  );
}

function Game(player: Player, score: Score) {
  console.log("player", player);
  console.log("score", score);
  return (
    <Main>
      <BoxScore>
        <ScoreStyle>
          {player.players.player1}:{score.score.player1}x{score.score.player2} :
          {player.players.player2}
        </ScoreStyle>
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

function mapStateToProps(state: PlayerState) {
  return {
    player: state.players,
    score: state.score,
  };
}

export default connect(mapStateToProps)(Game);
