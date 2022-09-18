import styled from 'styled-components';

const styles = {
    placeholderColor: ({ theme, color }) => {
        if (color) {
            return theme.colors[color][0];
        } else {
            return theme.colors['STORM'][0];
        }
    },
};

const InputStyles = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;

    &::-webkit-input-placeholder {
        /* Edge */
        color: ${styles.placeholderColor};
        font-weight: 300;
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${styles.placeholderColor};
        font-weight: 300;
    }

    &::placeholder {
        color: ${styles.placeholderColor};
        font-weight: 300;
    }
`;

export default InputStyles;
