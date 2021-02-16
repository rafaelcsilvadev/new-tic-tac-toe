import {
  Main,
  BoxScore,
  ScoreStyle,
  House,
  BoxButton,
  BoxWin,
  BoxSquares,
  Text,
} from "./styles";
import Button from "../../components/button";
import { connect } from "react-redux";
import { Player, Score } from "../../store/players/types";
import { useEffect, useState } from "react";

export interface StateProps {
  playerReducer: {
    players: Player;
    score: Score;
  };
}

function Game({ playerState }: any) {
  const [field, setField] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState(playerState.players.symbol);
  const [nextPlayer, setNextPlayer] = useState(true);
  const [winDisplay, setWinDisplay] = useState("none");
  const [squaresDisplay, setSquaresDisplay] = useState("block");
  const [winMessage, setWinMessage] = useState("");

  useEffect(() => {
    if (symbol === "true") {
      setSymbol(true);
    } else {
      setSymbol(false);
    }
  }, []);

  const hasWinner = (newField: Array<null | string>) => {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < condition.length; i++) {
      const [a, b, c] = condition[i];
      if (
        newField[a] &&
        newField[a] === newField[b] &&
        newField[a] === newField[c]
      ) {
        if (nextPlayer) {
          setWinDisplay("flex");
          setSquaresDisplay("none");
          return setWinMessage(
            `O jogador ${playerState.players.player1} ganhou.`
          );
        } else {
          setWinDisplay("flex");
          setSquaresDisplay("none");
          return setWinMessage(
            `O jogador ${playerState.players.player2} ganhou.`
          );
        }
      } else if (!newField.some((e) => e === null)) {
        setWinDisplay("flex");
        setSquaresDisplay("none");
        return setWinMessage("Velha");
      } else {
        return false;
      }
    }
  };

  const fillField = (fieldValue: number) => {
    const newField = field.slice();

    if (hasWinner(newField) || newField[fieldValue]) {
      return;
    }

    newField[fieldValue] = symbol === true ? "X" : "O";

    setField(newField);
    setSymbol(!symbol);
    setNextPlayer(!nextPlayer);
  };

  return (
    <Main>
      <BoxScore>
        <ScoreStyle color={nextPlayer ? "#3DF024" : "#fff"}>
          {playerState.players.player1}
        </ScoreStyle>
        <ScoreStyle>{playerState.score.player1}</ScoreStyle>
        <ScoreStyle>X</ScoreStyle>
        <ScoreStyle>{playerState.score.player2}</ScoreStyle>
        <ScoreStyle color={nextPlayer ? "#fff" : "#3DF024"}>
          {playerState.players.player2}
        </ScoreStyle>
      </BoxScore>
      <BoxSquares display={squaresDisplay}>
        <div>
          <House onClick={() => fillField(0)}>{field[0]}</House>
          <House onClick={() => fillField(1)}>{field[1]}</House>
          <House onClick={() => fillField(2)}>{field[2]}</House>
        </div>
        <div>
          <House onClick={() => fillField(3)}>{field[3]}</House>
          <House onClick={() => fillField(4)}>{field[4]}</House>
          <House onClick={() => fillField(5)}>{field[5]}</House>
        </div>
        <div>
          <House onClick={() => fillField(6)}>{field[6]}</House>
          <House onClick={() => fillField(7)}>{field[7]}</House>
          <House onClick={() => fillField(8)}>{field[8]}</House>
        </div>
      </BoxSquares>
      <BoxWin display={winDisplay}>
        <Text>{winMessage}</Text>
      </BoxWin>
      <BoxButton>
        <Button
          bgColor="#47B821"
          children="Novo Jogo"
          onClick={() => setField(Array(9).fill(null))}
        />
        <Button
          bgColor="#47B821"
          children="Mudar Jogadores"
          onClick={() => (window.location.href = "/")}
        />
      </BoxButton>
    </Main>
  );
}

function mapStateToProps(state: StateProps) {
  return {
    playerState: state.playerReducer,
  };
}

export default connect(mapStateToProps, null)(Game);
