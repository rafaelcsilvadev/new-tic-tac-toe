import { Player, PlayerActions, PlayerActionsState } from "../../store/players/types";

export function changeNamePlayers(newPlayer: Player): PlayerActionsState {
  return {
    type: PlayerActions.CHANGE_PLAYER,
    players: {
      player1: newPlayer.players.player1,
      player2: newPlayer.players.player2,
      symbol: newPlayer.players.symbol,
    },
    score: {
      player1: 0,
      player2: 0,
    },
  };
}

