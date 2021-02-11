export enum PlayerActions{
    CHANGE_PLAYER = '@players/change_players',
    POINTS_PLAYER1 = '@Players/points_player1',
    POINTS_PLAYER2 = '@players/points_player2'
}

export interface PlayerState{
    players:{
        player1: string,
        player2: string,
        symbol: string | boolean
    },
    score:{
        player1: number,
        player2: number
    }
}

export interface PlayerActionsState {
    type: string,
    players: {
        player1: string;
        player2: string;
        symbol: string | boolean;
    };
    score: {
        player1: number;
        player2: number;
    };
}