import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    width: 100%;
    height: 5rem;

    padding: 0 1rem;

    display: flex;
    justify-content: space-between;

    background-color: ${(props) => props.theme.colors['TWITTER'][1]};

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        height: 8rem;
        padding: 0 4rem;
    }
`;

export const LeftHeaderItems = styled.div`
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const RightHeaderItems = styled(LeftHeaderItems)`
    justify-content: flex-end;
`;

export const HeaderItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 1rem;

    cursor: pointer;
`;
