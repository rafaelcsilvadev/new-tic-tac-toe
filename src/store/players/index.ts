import { PlayerState, PlayerActionsState, PlayerActions } from './types';

const INITIAL_STATE: PlayerState ={
    players:{
        player1: '',
        player2: '',
        symbol: true
    },
    score: {
        player1: 0,
        player2: 0
    }
}

function playerReducer (state = INITIAL_STATE, action: PlayerActionsState){
    switch (action.type){
        case PlayerActions.CHANGE_PLAYER: 
            return {
              players: {
                player1: action.players.player1,
                player2: action.players.player2,
                symbol: action.players.symbol,
              },
              score: {
                player1: state.score.player1,
                player2: state.score.player2,
              },
            };
        case PlayerActions.POINTS_PLAYER1:
            return {
              players: {
                player1: action.players.player1,
                player2: action.players.player2,
                symbol: action.players.symbol,
              },
              score: {
                player1: state.score.player1 + 1,
                player2: state.score.player2,
              },
            };
        case PlayerActions.POINTS_PLAYER2:
            return {
              players: {
                player1: action.players.player1,
                player2: action.players.player2,
                symbol: action.players.symbol,
              },
              score: {
                player1: state.score.player1,
                player2: state.score.player2 + 1,
              },
            };
        default:
            return state;
    }
}

export default playerReducer;