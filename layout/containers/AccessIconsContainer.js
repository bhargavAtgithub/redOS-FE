import styled from 'styled-components';

const AccessIconContainer = styled.div`
    position: fixed;
    bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: enter;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        bottom: 2;
    }
`;

const AccessIcon = styled.div`
    height: 5rem;
    width: 5rem;
`;

export { AccessIconContainer, AccessIcon };
