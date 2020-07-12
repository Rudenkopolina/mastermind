import React, { useState } from 'react';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react'

const Container = styled.div`
    display: flex;
    align-items: center;
    pointer-events: ${({ disabled }) => disabled && 'none'};
`;

const InputCell = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5f5f5f;
    background: #e0e1e2;
    border-radius: 5px;
    margin: 0.5rem;
    cursor: default;
`;

function OutputDataContainer({ result = {} }) {
    const { rightNumbers, rightPosition } = result;
    return (
        <Container disabled={!Number.isInteger(rightNumbers)}>
            <Popup
                position='bottom center'
                on='click'
                content={`${rightNumbers} correct numbers`}
                trigger={<InputCell>{rightNumbers}</InputCell>}
            />
            :
            <Popup
                position='bottom center'
                on='click'
                content={`${rightPosition} of them in the right position`}
                trigger={<InputCell>{rightPosition}</InputCell>}
            />
        </Container>
    );
}

export default OutputDataContainer;
