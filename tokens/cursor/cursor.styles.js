import styled from 'styled-components';

const CursorStyle = styled.div`
    display: none;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        pointer-events: none;
        position: fixed;
        width: 4rem;
        height: 4rem;
        top: 100%;
        left: 100%;
        border-radius: 50%;
        opacity: 1;
        z-index: 999;
        display: block;
    }
`;

export default CursorStyle;
