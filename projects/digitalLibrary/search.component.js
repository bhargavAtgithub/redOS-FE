import styled from 'styled-components';
import { Search } from '../../icons';

const SearchContainer = styled.div`
    height: 6rem;
    max-width: 80rem;
    width: 100%;

    padding: 0 2rem;

    display: flex;
    align-items: center;

    border: 1px solid ${(props) => props.theme.colors['OUTER_SPACE'][0]};
    border-radius: 4rem;

    background-color: ${(props) => props.theme.colors['CARD'][0]}};

    overflow: hidden;
`;

const SearchInput = styled.input`
    height: 100%;
    width: 100%;

    border: none;
`;

const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Search books you love..."></SearchInput>
            {/* <Icon border={false} colors={'P'}> */}
            <Search />
            {/* </Icon> */}
        </SearchContainer>
    );
};

export default SearchBar;
