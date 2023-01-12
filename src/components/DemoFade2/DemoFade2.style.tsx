import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

export const Content = styled.div`
    background-image: radial-gradient(
        circle at center,
        #000000 0,
        rgba(131, 131, 131, 0.3) 30%,
        rgba(0, 0, 0, 0) 60%
    );
`;
