import { Main } from "./styles";
import Score from '../../components/score';
import Squares from '../../components/squares';

function Game() { 
  return (
    <Main>
      <Score />
      <Squares />
    </Main>
  );
}


export default Game;
