// eslint-disable-next-line no-shadow
export enum PlayerActions {
  CHANGE_PLAYER = "@players/change_players",
  CHANGE_SYMBOL = "@players/change_symbol",
  POINTS_PLAYER1 = "@Players/points_player1",
  POINTS_PLAYER2 = "@players/points_player2",
}

export interface PlayerState {
  players: {
    player1: string;
    player2: string;
    symbol: boolean | string;
  };
  score: {
    player1: number;
    player2: number;
  };
}

export interface PlayerActionsState {
  type: string;
  players: {
    player1: string;
    player2: string;
    symbol: boolean | string;
  };
  score: {
    player1: number;
    player2: number;
  };
}
