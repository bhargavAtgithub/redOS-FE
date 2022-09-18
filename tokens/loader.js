import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const LoadingFrames = (props) => keyframes`
    33% {
        background: ${props.theme.colors['CARD'][0]};
        box-shadow: -3rem 0 ${props.theme.colors[props.color][1]}, 3rem 0 ${
    props.theme.colors['CARD'][0]
}
    }
    66%{
        background: ${props.theme.colors[props.color][1]};
        box-shadow: -3rem 0 ${props.theme.colors['CARD'][0]}, 3rem 0 ${
    props.theme.colors['CARD'][0]
};
    }
    100%{
        background: ${props.theme.colors['CARD'][0]};
        box-shadow: -3rem 0 ${props.theme.colors['CARD'][0]}, 3rem 0 ${
    props.theme.colors[props.color][1]
}
    }

`;

const Loader = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: block;
    margin: 1.5rem;
    position: relative;
    background: ${(props) => props.theme.colors['CARD'][0]};
    box-shadow: -3rem 0 ${(props) => props.theme.colors['CARD'][0]},
        3rem 0 ${(props) => props.theme.colors['CARD'][0]};
    box-sizing: border-box;
    animation: ${(props) => LoadingFrames(props)} 1s linear infinite;
`;

Loader.defaultProps = {
    color: 'RED',
};

Loader.propTypes = {
    color: PropTypes.string,
};

export default Loader;
