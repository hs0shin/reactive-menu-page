import React from 'react';
import styled from 'styled-components';

const Topbar = null;
const Menu = null;
const PageDescription = null;
const Page = null;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const TopbarWrapper = styled.div`
    height: ${props => props.height || '5rem'};
    width: 100%;
`;

const BodyWrapper = styled.div`
    ${props => props.height ? `height: calc(100%-${props.height})` : '5rem'};
    width: 100%;
    flex-direction: row;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
`;


const ReactiveLeft = styled.div`
    width: 100%;
    height: 100%;
`;

const ReactiveRight = styled.div`
    width: 100%;
    height: 100%;
`;


export default function MainPage() {
    return (
        <Wrapper>
            <TopbarWrapper>
                <Topbar></Topbar>
            </TopbarWrapper>
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