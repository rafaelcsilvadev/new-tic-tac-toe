import { action } from 'typesafe-actions';
import { PlayersTypes } from './types';

export function ChangePlayer(data: PlayersTypes){
    return action(PlayersTypes.CHANGE_PLAYERS, data);
}