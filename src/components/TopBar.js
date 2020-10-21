import React from 'react'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: lightseagreen;
`;

export default function TopBar({  }) {
    return (
        <Wrapper>
            <h2>This is TopBar.</h2>
        </Wrapper>
    );
}