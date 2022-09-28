import styled from 'styled-components';
import SIZES from './loader.properties';

const LoaderContainer = styled.div`
    width: 100%;
    min-width: 6rem;
    height: ${(props) => SIZES[props.size]}rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export default LoaderContainer;
