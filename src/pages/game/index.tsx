import { Main, BoxScore, Score, House, BoxButton } from './styles';
import Button from '../../components/button';
import { connect } from 'react-redux';

function Field() {
	return (
		<div>
			<House>X</House>
			<House>X</House>
			<House>X</House>
		</div>
	);
}

function Game({player}: any) {
	return (
		<Main>
			<BoxScore>
				<Score> {player.player1}: 5 x 3 :{player.player2}</Score>
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

export default connect(state => ({
	player: state
}))(Game);