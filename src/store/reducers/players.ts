import { _Players } from '../../interfaces';

const INITIAL_STATE: _Players = {
	player1: 'Rafael',
	player2: 'Josi',
	symbol: true,
	score1: 0,
	score2: 0,
};

function players(state = INITIAL_STATE, action: any) {
	switch (action.type) {
		case 'CHANGE_PLAYERS':
			state.player1 = action.player1;
			state.player2 = action.player2;
			state.symbol = action.symbol;
			return state;
		case 'UPDATE_SCORE1':
			state.score1 = state.score1 + 1;
			return state;
		case 'UPDATE_SCORE2':
			state.score2 = state.score2 + 1;
			return state;
		default:
			return state;
	}
}

export default players;
