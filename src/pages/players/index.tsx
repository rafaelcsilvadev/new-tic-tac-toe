import React from 'react';
import { Main, BoxData, Label, Input, Select } from './styles';
import ButtonComponents from '../../components/button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    player1: 'Jaldimar',
    player2: 'Nilza',
    symbol: false,
    score1: 0,
    score2: 0,
  };

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
            <option value="false">O</option>
          </Select>
        </div>
      </BoxData>
      <BoxData>
        <Label>Informe o nome do jogador 2.</Label>
        <Input
          type="text"
          name="player2"
          id="player2"
          placeholder="Jogador 2"
        />
      </BoxData>
      <Link to="/game">
        <ButtonComponents
          children="Jogar"
          onClick={() => 
            dispatch(
              changePlayers(newPlayers)
              )}
        />
      </Link>
    </Main>
  );
}

export default connect()(Players);
