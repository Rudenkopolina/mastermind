import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

const Container = styled.div`
    display: flex;
    width: 6.7rem;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px #e5e5e5;
    position: absolute;
    top: 3rem;
    left: ${({ keyboardPosition }) => -2 + 3 * keyboardPosition}rem;
    z-index: 1;
    background: #fff;
`;

const InputCell = styled(Button)`
    &&& {
        height: 2rem;
        width: 2rem;
        padding: 0.5rem;
        margin: 0.1rem;
    }
`;

const Overlay = styled.div`
    width: 100vw;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
`;

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Keyboard({
        isOpen,
        activeCell,
        onClose,
        setInputNumber,
        disabledNumbers = [],
    }) {

    if (isOpen) {
        return (
            <>
                <Overlay onClick={onClose} />
                <Container keyboardPosition={activeCell}>
                    {keys.map((key, index) => (
                        <InputCell
                            key={`key-${index}`}
                            onClick={() => setInputNumber(activeCell, key)}
                            disabled={disabledNumbers.includes(key)}
                        >
                            {key}
                        </InputCell>
                    ))}
                </Container>
            </>
        );
    }
    return null;
}

export default Keyboard;
