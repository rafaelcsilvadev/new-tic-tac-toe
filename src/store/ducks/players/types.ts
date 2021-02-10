export enum PlayersTypes {
  CHANGE_PLAYERS = "@players/CHANGE_PLAYERS",
  SCORE_PLAYER1 = "@players/SCORE_PLAYER1",
  SCORE_PLAYER2 = "@players/SCORE_PLAYER2"
}

export interface PlayersState {
  players: {
    player1: string,
    player2: string,
    symbol: string | boolean
  }
  score: {
    player1: number,
    player2: number
  }
}