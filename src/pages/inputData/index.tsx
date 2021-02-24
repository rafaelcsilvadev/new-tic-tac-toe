import React, { FormEvent, useState } from 'react';
import { Main, BoxData, Label, Input, Select, Form } from './styles';
import ButtonComponents from '../../components/button';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as PlayerActions from '../../store/players/actions';
import { PlayerState } from '../../store/players/types';
import ErrorMessage from '../../components/errorMessage';

function InputData({ playersDispatch }: any) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [symbol, setSymbol] = useState('true');
  const [displayError, setDisplayError] = useState('none');

  const newPlayer: PlayerState = {
    players: {
      player1: player1,
      player2: player2,
      symbol: symbol,
    },
    score: {
      player1: 0,
      player2: 0,
    },
  };

  const handleSavePlayers = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!player1 || !player2) {
      setDisplayError('block');
    } else {
      playersDispatch(newPlayer);
      window.location.href = '/game';
    }
  };

  return (
    <Main>
      <Form onSubmit={handleSavePlayers}>
        <BoxData>
          <Label>Informe o nome e símbolo do jogador 1.</Label>
          <div>
            <Input
              type="text"
              name="player1"
              id="player1"
              placeholder="Jogador 1"
              maxLength={5}
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <Select
              name="symbol"
              id="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            >
              <option defaultChecked value="true">
                X
              </option>
              <option value="false">O</option>
            </Select>
          </div>
        </BoxData>
        <ErrorMessage
          display={displayError}
          children="Informe os nomes dos jogadores."
        />
        <BoxData>
          <Label>Informe o nome do jogador 2.</Label>
          <Input
            type="text"
            name="player2"
            id="player2"
            placeholder="Jogador 2"
            maxLength={5}
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
        </BoxData>
        <ButtonComponents type="submit" bgColor="#47B821">
          Enviar
        </ButtonComponents>
      </Form>
    </Main>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    playersDispatch: (newPlayer: PlayerState) =>
      dispatch(PlayerActions.changeNamePlayers(newPlayer)),
  };
}
export default connect(null, mapDispatchToProps)(InputData);
