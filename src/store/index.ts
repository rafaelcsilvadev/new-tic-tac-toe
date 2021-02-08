import { createStore } from 'redux';

const INITIAL_STATE: any = {
    player1: "Rafael",        
    player2: 'Josi',
    symbol: true
}

function reducer(state = INITIAL_STATE, action: any){
    switch(action.type){
        case 'CHANGE_PLAYERS':
            return { 
                player1: action.player1, 
                player2: action.player2, 
                symbol: action.symbol 
            }
        default:
            return state;
    }
}


const store = createStore(reducer);

export default store;