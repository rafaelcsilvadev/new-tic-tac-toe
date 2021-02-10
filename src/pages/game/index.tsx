import { Main, BoxScore, Score, House, BoxButton } from './styles';
import Button from '../../components/button';

function Field() {
	return (
		<div>
			<House>X</House>
			<House>X</House>
			<House>X</House>
		</div>
	);
}

function Game() {
	return (
		<Main>
			<BoxScore>
				<Score>
					Rafael: 1 x Jurandir: 0
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

export default Game;