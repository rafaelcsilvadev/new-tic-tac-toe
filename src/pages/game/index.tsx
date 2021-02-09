import { Main, BoxScore, Score, House, BoxButton } from './styles';
import Button from '../../components/button';
import { connect } from 'react-redux';
import { _State } from '../../interfaces';

function Field() {
	return (
		<div>
			<House>X</House>
			<House>X</House>
			<House>X</House>
		</div>
	);
}

function Game({ player }: _State) {
	return (
		<Main>
			<BoxScore>
				<Score>
					{player.player1}: {player.score1} x {player.score2} :{player.player2}
				</Score>
			</BoxScore>
			<div>
				<Field />
				<Field />
				<Field />
			</div>
			<BoxButton>
				<Button children='Novo Jogo' />
				<Button children='Mudar Jogadores' />
			</BoxButton>
		</Main>
	);
}

export default connect((state: any) => ({
	player: state.players,
}))(Game);
