import React from 'react';
import styled from 'styled-components';

import TopBar from '../components/TopBar';
import Page from '../components/Page';
import PageDescription from '../components/PageDescription';
import Menu from '../components/Menu';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const TopBarWrapper = styled.div`
    height: ${props => props.height || '5rem'};
    width: 100%;
`;


const BodyWrapper = styled.div`
    ${props => props.height ? `height: calc(100% - ${props.height})` : 'height: calc(100% - 5rem)'};
    display: flex;
    width: 100%;
    flex-direction: row;

    /*화면이 좌우로 짧을 때  */
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const ReactiveLeft = styled.div`   
    display: flex;
    flex-basis: 20rem;
    flex-grow: 0.05;
    height: 100%;

    /*화면이 좌우로 짧을 때  */
    @media only screen and (max-width: 700px) {
        flex-basis: 5rem;
        width:100%;
    }
`;

const ReactiveRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

    @media only screen and (max-width: 700px) {
        flex-grow: 1;
        width: 100%;
    }
`;

export default function MainPage() {
    return (
        <Wrapper>
            <TopBarWrapper>
                <TopBar></TopBar>
            </TopBarWrapper>
            <BodyWrapper>
                <ReactiveLeft><Menu></Menu></ReactiveLeft>
                <ReactiveRight>
                    <PageDescription>
                    </PageDescription>
                    <Page>
                    </Page>
                </ReactiveRight>
            </BodyWrapper>
        </Wrapper>
    )
}