import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputDataContainer from './InputDataContainer';
import OutputDataContainer from './OutputDataContainer';
import { getRandomCombination } from '../utils/getRandomCombination';
import { checkCombination } from '../utils/checkCombination';
import СongratulationModal from './СongratulationModal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Divider = styled.div`
    display: flex;
    width: 1px;
    height: auto;
    background: #e0e1e2;
`;

const RowContainer = styled.div`
    display: flex;
`;

const rows = [...Array(10)].map((item, index) => (
    index === 0 ? { isActive: true } : { isActive: false }
));

// const gameState = 'GREETING' | 'PLAING' | 'FINISH';

function GameContainer() {
    const [gameState, setGameState] = useState('GREETING')
    const [playRows, sePlayRows] = useState(rows);
    const [combination, setCombination] = useState([]);

    useEffect(() => {
        setCombination(getRandomCombination());
    }, [])

    console.log(combination);
    const handleCheckCombination = (inputNumbers, rowIndex) => {
        const { rightNumbers, rightPosition } = checkCombination(inputNumbers, combination);
        
        if (rightNumbers === 4 && rightPosition === 4) {
            setGameState('FINISH')
        }

        const changedRows = playRows.map((row, index) => {
            if (index === rowIndex) {
                return ({
                    isActive: false,
                    result: { rightNumbers, rightPosition }
                });
            }
            if (index === rowIndex + 1 ) {
                return ({ isActive: true });
            }
            return ({ ...row });
        })

        sePlayRows(changedRows);
    }

    return (
        <Container>
            {playRows.map((row, index) => (
                <RowContainer key={`row-${index}`} >
                    <InputDataContainer
                        isActive={row.isActive}
                        rowIndex={index}
                        checkCombination={handleCheckCombination}
                    />
                    <Divider />
                    <OutputDataContainer
                        result={row.result}
                    />
                </RowContainer>
            ))}
        <СongratulationModal
            open={gameState === 'FINISH'}
        />
        </Container>
    );
}

export default GameContainer;
