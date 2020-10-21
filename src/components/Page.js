import React from 'react'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    background-color: lightcoral;
`;

export default function Page({ }) {
    return (
        <Wrapper>
            <h2>This is Page.</h2>
        </Wrapper>
    );
}