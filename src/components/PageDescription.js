import React from 'react'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-basis: 7rem;
    flex-grow: 0.05;
    width: 100%;
    background-color: lightgray;
`;

export default function PageDescription({  }) {
    return (
        <Wrapper>
            <h2>This is Page Description.</h2>
        </Wrapper>
    );
}