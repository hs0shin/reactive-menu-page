import React from 'react'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: lightblue;
`;

export default function Menu({  }) {
    return (
        <Wrapper>
            <h2>This is Menu.</h2>
        </Wrapper>
    );
}