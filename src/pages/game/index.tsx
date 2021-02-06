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

export default function Game() {
	return (
		<Main>
			<BoxScore>
				<Score>Rafa: 5 x 3 :Josi</Score>
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
