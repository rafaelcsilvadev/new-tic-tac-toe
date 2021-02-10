import { Main, BoxScore, Score, House, BoxButton } from './styles';
import Button from '../../components/button';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { PlayersState } from '../../store/ducks/players/types';

interface StateProps{
	players: PlayersState,
	score: PlayersState
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

function Game({players, score}: StateProps) {
	return (
    <Main>
      <BoxScore>
        <Score>
          {players.players.player1}: {score.players.player1} x {score.score.player1}
          :{players.score.player2}
        </Score>
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

<<<<<<< HEAD
function mapStateToProps(state: any) {
	return {
		players: state.playerState.players,
		score: state.playerState.score
	}
}

export default connect(mapStateToProps, null)(Game);
=======
export default connect((state: any) => ({
	player: state.players
}))(Game);
>>>>>>> parent of 40369bf (finish redux)
