import styled from 'styled-components';

const CursorStyle = styled.div`
    pointer-events: none;
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 100%;
    left: 100%;
    // transform: translate(-10%, -10%);
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    z-index: 999;

    display: none;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        display: block;
    }
`;

export default CursorStyle;
