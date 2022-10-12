import PropTypes from 'prop-types';
import styled from 'styled-components';

const PasswordContainer = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    border: 2px solid ${(props) => props.theme.colors['TITLE'][0]};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const PasswordEye = styled.div`
    width: ${(props) => (props.see ? `0.5` : `100%`)};
    height: ${(props) => (props.see ? `0.5` : `100%`)};

    transition: all 150ms linear;

    border-radius: 50%;

    background-color: ${(props) => props.theme.colors['TITLE'][0]};
`;

const Password = ({ see, togglePassword }) => (
    <PasswordContainer onClick={togglePassword}>
        <PasswordEye see={see} />
    </PasswordContainer>
);

Password.defaultProps = {
    see: false,
    togglePassword: () => {},
};

Password.propTypes = {
    see: PropTypes.bool,
    togglePassword: PropTypes.func,
};

export default Password;
