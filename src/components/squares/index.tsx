import { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import { PlayerState } from '../../store/players/types';
import * as PlayerActions from '../../store/players/actions';
import { Section, BoxSquares, House, BoxWin, Text, BoxButton } from './styles';

interface StateProps {
  playerReducer: PlayerState;
}

function Squares({
  playerState,
  scoreDispatchPlayer1,
  scoreDispatchPlayer2,
}: any) {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [winDisplay, setWinDisplay] = useState('none');
  const [squaresDisplay, setSquaresDisplay] = useState('block');
  const [winMessage, setWinMessage] = useState('');
  const [field, setField] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState(
    playerState.players.symbol === 'true'
      ? (playerState.players.symbol = true)
      : (playerState.players.symbol = false),
  );

  const newScore: PlayerState = {
    players: {
      player1: playerState.players.player1,
      player2: playerState.players.player2,
      symbol: symbol,
    },
    score: {
      player1: playerState.score.player1,
      player2: playerState.score.player2,
    },
  };

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
        console.log(i);
        if (nextPlayer) {
          setWinDisplay('flex');
          setSquaresDisplay('none');
          scoreDispatchPlayer1(newScore);
          return setWinMessage(
            `O jogador ${playerState.players.player1} ganhou.`,
          );
        } else {
          setWinDisplay('flex');
          setSquaresDisplay('none');
          scoreDispatchPlayer2(newScore);
          return setWinMessage(
            `O jogador ${playerState.players.player2} ganhou.`,
          );
        }
      } else if (!newField.some((e) => e === null)) {
        setWinDisplay('flex');
        setSquaresDisplay('none');
        return setWinMessage('Velha');
      }
    }

    return false;
  };

  const fillField = (fieldValue: number) => {
    const newField = field.slice();
    if (newField[fieldValue]) {
      return;
    }

    newField[fieldValue] = symbol === true ? 'X' : 'O';
    setField(newField);

    setTimeout(() => {
      if (hasWinner(newField)) {
        return;
      }
    }, 500);

    setSymbol(!symbol);
    setNextPlayer(!nextPlayer);
  };

  const newGame = () => {
    setWinDisplay('none');
    setSquaresDisplay('block');
    setField(Array(9).fill(null));
  };

  return (
    <Section>
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
        <Button bgColor="#47B821" onClick={() => newGame()}>
          Novo Jogo
        </Button>
        <Link to="/">
          <Button bgColor="#47B821">Mudar Jogadores</Button>
        </Link>
      </BoxButton>
    </Section>
  );
}

function mapStateToProps(state: StateProps) {
  return {
    playerState: state.playerReducer,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    scoreDispatchPlayer1: (newPlayer: PlayerState) =>
      dispatch(PlayerActions.addPointPlayer1(newPlayer)),
    scoreDispatchPlayer2: (newPlayer: PlayerState) =>
      dispatch(PlayerActions.addPointPlayer2(newPlayer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Squares);