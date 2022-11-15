import styled from 'styled-components';

const SearchContaier = styled.input`
    height: 6rem;
    max-width: 80rem;
    width: 100%;

    padding: 0 2rem;

    display: flex;

    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};
    border-radius: 4rem;

    background-color: ${(props) => props.theme.colors['CARD'][0]}};
`;

const SearchBar = () => {
    return (
        <SearchContaier placeholder="Search books you love..."></SearchContaier>
    );
};

export default SearchBar;
