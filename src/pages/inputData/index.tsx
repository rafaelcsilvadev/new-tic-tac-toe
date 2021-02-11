import React, { useState } from "react";
import { Main, BoxData, Label, Input, Select } from "./styles";
import ButtonComponents from "../../components/button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as PlayerActions from "../../store/players/actions";
import { Player } from "../../store/players/types";

function InputData({ players }: any) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [symbol, setSymbol] = useState("true");

  const newPlayer: Player = {
    players: {
      player1: player1,
      player2: player2,
      symbol: symbol,
    },
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
            minLength={1}
            maxLength={10}
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
      <BoxData>
        <Label>Informe o nome do jogador 2.</Label>
        <Input
          type="text"
          name="player2"
          id="player2"
          placeholder="Jogador 2"
          minLength={1}
          maxLength={10}
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
      </BoxData>
      <Link to="/game">
        <ButtonComponents children="Jogar" onClick={() => players(newPlayer)} />
      </Link>
    </Main>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    players: (newPlayer: Player) =>
      dispatch(PlayerActions.changeNamePlayers(newPlayer)),
  };
}
export default connect(mapDispatchToProps)(InputData);
