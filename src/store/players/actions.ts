import {
  PlayerActions,
  PlayerActionsState,
  PlayerState,
} from '../../store/players/types';

export function changeNamePlayers(newPlayer: PlayerState): PlayerActionsState {
  return {
    type: PlayerActions.CHANGE_PLAYER,
    players: {
      player1: newPlayer.players.player1,
      player2: newPlayer.players.player2,
      symbol: newPlayer.players.symbol,
    },
    score: {
      player1: newPlayer.score.player1,
      player2: newPlayer.score.player2,
    },
  };
}

export function addPointPlayer1(addPoint: PlayerState): PlayerActionsState {
  return {
    type: PlayerActions.POINTS_PLAYER1,
    players: {
      player1: addPoint.players.player1,
      player2: addPoint.players.player2,
      symbol: addPoint.players.symbol,
    },
    score: {
      player1: addPoint.score.player1,
      player2: addPoint.score.player2,
    },
  };
}

export function addPointPlayer2(addPoint: PlayerState): PlayerActionsState {
  return {
    type: PlayerActions.POINTS_PLAYER2,
    players: {
      player1: addPoint.players.player1,
      player2: addPoint.players.player2,
      symbol: addPoint.players.symbol,
    },
    score: {
      player1: addPoint.score.player1,
      player2: addPoint.score.player2,
    },
  };
}
