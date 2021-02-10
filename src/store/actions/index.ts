import { _Players } from "../../interfaces";

export function PlayersActions({ player1, player2, symbol, score1, score2 }: _Players) {
  return {
    type: "CHANGE_PLAYERS",
    player1,
    player2,
    symbol,
    score1,
    score2,
  };
}
