import React from 'react';
import { Main, BoxData, Label, Input, Select } from './styles';
import ButtonComponents from '../../components/button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _Players } from '../../interfaces';
import { PlayersActions  } from "../../store/actions";


function Players({ changePlayers }: any) {
  const newPlayers: _Players = {
    player1: 'Luiz Claudio',
    player2: 'Daniel',
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
        <ButtonComponents children="Jogar" onClick={() => changePlayers(newPlayers)} />
      </Link>
    </Main>
  );
}

function mapDispatchToProps(dispatch: any) {
	return {
		changePlayers(newPlayers: _Players){
      return dispatch(PlayersActions(newPlayers));
    }
	}
}

export default connect(null, mapDispatchToProps)(Players);
