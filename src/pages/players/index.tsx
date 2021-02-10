import React from 'react';
import { Main, BoxData, Label, Input, Select } from './styles';
import ButtonComponents from '../../components/button';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as PLayersActions from '../../store/ducks/players/actions';

interface DispatchProps {}
=======
import { _Players } from '../../interfaces';

function changePlayers({ player1, player2, symbol, score1, score2 }: _Players) {
	return {
		type: 'CHANGE_PLAYERS',
		player1,
		player2,
		symbol,
		score1,
		score2
	};
}

function Players({ dispatch }: any) {
  const newPlayers: _Players = {
    player1: 'Luiz Claudio',
    player2: 'Daniel',
    symbol: false,
    score1: 0,
    score2: 0,
  };
>>>>>>> parent of 40369bf (finish redux)

function Players() {
	return (
    <Main>
      <BoxData>
        <Label>Informe o nome e símbolo do jogador 1.</Label>
        <div>
          <Input
            type="text"
            name="player1"
            id="player1"
            placeholder="Jogador 1"
          />
          <Select>
            <option defaultChecked value="true">
              X
            </option>
            <option value="false">
              O
            </option>
          </Select>
        </div>
      </BoxData>
      <BoxData>
        <Label>
          Informe o nome do jogador 2.
        </Label>
        <Input
          type="text"
          name="player2"
          id="player2"
          placeholder="Jogador 2"
        />
      </BoxData>
      <Link to="/game">
<<<<<<< HEAD
        <ButtonComponents children="Jogar" />
=======
        <ButtonComponents
          children="Jogar"
          onClick={() => 
            dispatch(
              changePlayers(newPlayers)
              )}
        />
>>>>>>> parent of 40369bf (finish redux)
      </Link>
    </Main>
  );
}

<<<<<<< HEAD
function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(PLayersActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Players);
=======
export default connect()(Players);
>>>>>>> parent of 40369bf (finish redux)
