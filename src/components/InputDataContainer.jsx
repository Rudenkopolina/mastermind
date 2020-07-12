import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'
import Keyboard from './Keyboard';

const Container = styled.div`
    display: flex;
    position: relative;
    pointer-events: ${({ disabled }) => disabled && 'none'};
`;

const setColor = ({ disabled,  isActive}) => {
    if (isActive) {
        return '#8bc34a3d'
    }
    return '#e3eef7'
}

const InputCell = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5f5f5f;
    background:  ${(props) => setColor(props)};
    border: ${({ isActiveCell }) => isActiveCell && '1px solid #8bc34a6e'};
    border-radius: 5px;
    margin: 0.5rem;
    cursor: pointer;
`;

const StyledButton = styled(Button)`
    && {
        height: 2rem;
        margin: 0.5rem;
        padding: 0.5rem 1rem;
    }
`;

function InputDataContainer({ isActive, checkCombination, rowIndex }) {
    const [isKeydoardOpen, setIsKeyboardOpen] = useState(false);
    const [activeCell, setActiveCell] = useState(null);
    const [inputNumbers, setInputNumbers] = useState([null,null,null,null]);

    const clickOnCell = index => {
        setActiveCell(index);
        setIsKeyboardOpen(true);
    }

    const closeKeyboard = () => {
        setActiveCell(null);
        setIsKeyboardOpen(false);
    }

    const setInputNumber = (index, value) => {
        const newNumbers = [...inputNumbers]
        newNumbers[index] = value;
        setInputNumbers(newNumbers);
        if (index !== inputNumbers.length - 1) {
            clickOnCell(index + 1);
        } else {
            closeKeyboard();
        }
    }

    const isButtonVisiable = () => (
        inputNumbers.filter(number => number === null).length
    )

    return (
        <Container disabled={!isActive}>
            <Keyboard
                isOpen={isKeydoardOpen}
                activeCell={activeCell}
                onClose={closeKeyboard}
                setInputNumber={setInputNumber}
                disabledNumbers={inputNumbers}
            />
            {inputNumbers.map((number, index) => (
                <InputCell
                    key={`input-number-${index}`}
                    onClick={() => clickOnCell(index)}
                    isActive={isActive}
                    isActiveCell={activeCell === index}
                >
                    {number}
                </InputCell>
            ))}
            <StyledButton
                disabled={!!isButtonVisiable() || !isActive}
                onClick={() => checkCombination(inputNumbers, rowIndex)}
            >
                Set
            </StyledButton>
        </Container>
    );
}

export default InputDataContainer;
