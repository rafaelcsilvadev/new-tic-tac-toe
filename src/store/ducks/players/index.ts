import { Reducer } from 'redux';
import { PlayersTypes, PlayersState } from './types';

const INITIAL_STATE: PlayersState = {
    players: {
        player1: 'Jogador 1',
        player2: 'Jogador 2',
        symbol: true
    },
    score: {
        player1: 0,
        player2: 0
    }
}

function playersReducer(
    state = INITIAL_STATE,  action: any){
  switch (action.type) {
    case PlayersTypes.CHANGE_PLAYERS:
      state.players.player1 = action.player.player1;
      state.players.player2 = action.player.player2;
      state.players.symbol = action.player.symbol;
      return state;
    case PlayersTypes.SCORE_PLAYER1:
      state.score.player1 = state.score.player1 + 1;
      return state;
    case PlayersTypes.SCORE_PLAYER2:
      state.score.player2 = state.score.player2 + 1;
      return state;
    default:
      return state;
  }
}

export default playersReducer;