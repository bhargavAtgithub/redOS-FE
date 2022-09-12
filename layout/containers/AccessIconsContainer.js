import styled from "styled-components";

const AccessIconContainer = styled.div`
    position: fixed;
    bottom: 2rem;

    height: 5rem;
    width: 5rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        bottom: 2;
    }
`;

export default AccessIconContainer;
