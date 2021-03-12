import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../button';
import { PlayerState } from '../../store/players/types';
import * as PlayerActions from '../../store/players/actions';
// eslint-disable-next-line object-curly-newline
import { Section, BoxSquares, House, BoxWin, Text, BoxButton } from './styles';

interface StateProps {
  playerReducer: PlayerState;
}

const Square: React.FC = ({
  playerState,
  scoreDispatchPlayer1,
  scoreDispatchPlayer2,
  playersDispatch,
}: any) => {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [winDisplay, setWinDisplay] = useState('none');
  const [squaresDisplay, setSquaresDisplay] = useState('block');
  const [winMessage, setWinMessage] = useState('');
  const [field, setField] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState(
    // eslint-disable-next-line no-unneeded-ternary
    playerState.players.symbol === 'true' ? true : false,
  );

  const ActionObject: PlayerState = {
    players: {
      player1: playerState.players.player1,
      player2: playerState.players.player2,
      symbol,
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

    for (let i = 0; i < condition.length; i += 1) {
      const [a, b, c] = condition[i];
      if (
        // eslint-disable-next-line operator-linebreak
        newField[a] &&
        // eslint-disable-next-line operator-linebreak
        newField[a] === newField[b] &&
        newField[a] === newField[c]
      ) {
        if (nextPlayer) {
          setWinDisplay('flex');
          setSquaresDisplay('none');
          scoreDispatchPlayer1(ActionObject);
          setWinMessage(`O jogador ${playerState.players.player1} ganhou.`);
        } else {
          setWinDisplay('flex');
          setSquaresDisplay('none');
          scoreDispatchPlayer2(ActionObject);
          setWinMessage(`O jogador ${playerState.players.player2} ganhou.`);
        }
      } else if (!newField.some((e) => e === null)) {
        setWinDisplay('flex');
        setSquaresDisplay('none');
        return setWinMessage('Velha');
      }
    }

    return false;
  };

  const handleFillField = (fieldValue: number) => {
    const newField = field.slice();
    if (newField[fieldValue]) {
      return;
    }

    newField[fieldValue] = symbol === true ? 'X' : 'O';
    setField(newField);

    setTimeout(() => {
      if (hasWinner(newField)) {
        // eslint-disable-next-line no-useless-return
        return;
      }
    }, 500);

    setSymbol(!symbol);
    playersDispatch(ActionObject);
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
          <House onClick={() => handleFillField(0)}>{field[0]}</House>
          <House onClick={() => handleFillField(1)}>{field[1]}</House>
          <House onClick={() => handleFillField(2)}>{field[2]}</House>
        </div>
        <div>
          <House onClick={() => handleFillField(3)}>{field[3]}</House>
          <House onClick={() => handleFillField(4)}>{field[4]}</House>
          <House onClick={() => handleFillField(5)}>{field[5]}</House>
        </div>
        <div>
          <House onClick={() => handleFillField(6)}>{field[6]}</House>
          <House onClick={() => handleFillField(7)}>{field[7]}</House>
          <House onClick={() => handleFillField(8)}>{field[8]}</House>
        </div>
      </BoxSquares>
      <BoxWin display={winDisplay}>
        <Text>{winMessage}</Text>
      </BoxWin>
      <BoxButton>
        <Button onClick={() => newGame()}>Novo Jogo</Button>
        <Link to="/">
          <Button>Mudar Jogadores</Button>
        </Link>
      </BoxButton>
    </Section>
  );
};

const mapStateToProps = (state: StateProps) => ({
  playerState: state.playerReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  scoreDispatchPlayer1: (addPoint: PlayerState) => {
    dispatch(PlayerActions.addPointPlayer1(addPoint));
  },
  scoreDispatchPlayer2: (addPoint: PlayerState) => {
    dispatch(PlayerActions.addPointPlayer2(addPoint));
  },
  playersDispatch: (changeSymbol: PlayerState) => {
    dispatch(PlayerActions.changeSymbol(changeSymbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
