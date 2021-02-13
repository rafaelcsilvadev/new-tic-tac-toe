import React, { useState } from "react";
import { Main, BoxData, Label, Input, Select } from "./styles";
import ButtonComponents from "../../components/button";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as PlayerActions from "../../store/players/actions";
import { Player } from "../../store/players/types";
import ErrorMessage from "../../components/errorMessage";

function InputData({ players }: any) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [symbol, setSymbol] = useState("true");
  const [displayError, setDisplayError] = useState("none");
  const [displaySend, setDisplaySend] = useState("block");
  const [displayPlay, setDisplayPlay] = useState("none");

  const newPlayer: Player = {
    players: {
      player1: player1,
      player2: player2,
      symbol: symbol,
    },
  };

  const hasPlayers = () => {
    if (!player1 || !player2) {
      return setDisplayError("block");
    } else {
      setDisplaySend('none')
      setDisplayPlay('block')
      return players(newPlayer);
    }
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
      <ButtonComponents
        bgColor="#47B821"
        display={displaySend}
        children="Enviar"
        onClick={() => hasPlayers()}
      />
      <ButtonComponents
        bgColor="#F0A230"
        display={displayPlay}
        children="Jogar"
        onClick={() => (window.location.href = "/game")}
      />
    </Main>
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    players: (newPlayer: Player) =>
      dispatch(PlayerActions.changeNamePlayers(newPlayer)),
  };
}
export default connect(null, mapDispatchToProps)(InputData);
