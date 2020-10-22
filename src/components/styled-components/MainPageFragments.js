import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const TopBarWrapper = styled.div`
    height: ${props => props.height || '5rem'};
    width: 100%;
`;


export const BodyWrapper = styled.div`
    ${props => props.height ? `height: calc(100% - ${props.height})` : 'height: calc(100% - 5rem)'};
    display: flex;
    width: 100%;
    flex-direction: row;

    /*화면이 좌우로 짧을 때  */
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ReactiveLeft = styled.div`   
    display: flex;
    flex-basis: 20rem;
    flex-grow: 0.05;
    height: 100%;

    /*화면이 좌우로 짧을 때  */
    @media only screen and (max-width: 1000px) {
        flex-basis: 5rem;
        width:100%;
    }
`;

export const ReactiveRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    
    @media only screen and (max-width: 1000px) {
        flex-grow: 1;
        width: 100%;
    }
`;