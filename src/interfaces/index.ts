export interface _Players{
    player1: string,
    player2: string,
    symbol: boolean | string,
    score1: number,
    score2: number
}

export interface _State {
    player: Array<string | boolean | number>;
}
