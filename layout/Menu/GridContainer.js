import styled from "styled-components";

const GridContainer = styled.ul`
    margin: 0;
    padding: 0;
    width: 44rem;

    display: grid;
    grid-template-columns: repeat(2, 21rem);
    grid-template-rows: repeat(8, 21rem);

    gap: 2rem 2rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        width: 126rem;

        grid-template-columns: repeat(4, 30rem);
        grid-template-rows: repeat(4, 30rem);
    }

=`;

export default GridContainer;
