import React from 'react';
import { Main, BoxData, Label, Input, Select } from './styles';
import ButtonComponents from '../../components/button';

export default function Players(){

    const pageChange = () => {
        window.location.href = '/game'
    }

    return (
        <Main>
            <BoxData>
                <Label>
                    Informe o nome e símbolo do jogador 1.
                </Label>
                <div>
                    <Input type="text" name="player1" id="player1" placeholder="Jogador 1"/>
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
                <Input type="text" name="player2" id="player2" placeholder="Jogador 2"/>
            </BoxData>
            <ButtonComponents children="Jogar" onClick={pageChange}/>
        </Main>
    );
}