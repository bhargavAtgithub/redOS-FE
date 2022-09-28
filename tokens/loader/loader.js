import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import LoaderContainer from './loader.container';

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

const LoaderStyles = styled.div`
    width: 1.5rem;
    max-width: 1.5rem;
    height: 1.5rem;
    max-height: 1.5rem;
    border-radius: 50%;
    display: block;
    position: relative;
    background: ${(props) => props.theme.colors['CARD'][0]};
    box-shadow: -3rem 0 ${(props) => props.theme.colors['CARD'][0]},
        3rem 0 ${(props) => props.theme.colors['CARD'][0]};
    box-sizing: border-box;
    animation: ${(props) => LoadingFrames(props)} 1s linear infinite;
`;

const Loader = ({ size, color }) => {
    return (
        <LoaderContainer size={size}>
            <LoaderStyles color={color} />
        </LoaderContainer>
    );
};

Loader.defaultProps = {
    color: 'RED',
    size: 'rg',
};

Loader.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

export default Loader;
