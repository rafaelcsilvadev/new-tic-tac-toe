import { PlayerActions, PlayerActionsState } from "../../store/players/types";

export function changeNamePlayers(): PlayerActionsState {
  return {
    type: PlayerActions.CHANGE_PLAYER,
    players: {
      player1: "Rafa",
      player2: "Josi",
      symbol: true,
    },
    score: {
      player1: 0,
      player2: 0,
    },
  };
}

