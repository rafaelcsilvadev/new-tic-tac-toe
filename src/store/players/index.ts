import { PlayerState, PlayerActionsState, PlayerActions } from "./types";

const INITIAL_STATE: PlayerState = {
  players: {
    player1: "J1",
    player2: "J2",
    symbol: true,
  },
  score: {
    player1: 0,
    player2: 0,
  },
};

function playerReducer(state = INITIAL_STATE, action: PlayerActionsState) {
  switch (action.type) {
    case PlayerActions.CHANGE_PLAYER:
      console.log('oi')
      return {
        players: {
          player1: action.players.player1.substr(0, 5),
          player2: action.players.player2.substr(0, 5),
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
