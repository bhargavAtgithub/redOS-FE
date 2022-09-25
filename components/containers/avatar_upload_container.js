import styled, { keyframes } from 'styled-components';

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    padding: 1rem;
`;

const InfiniteRotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const AvatarUploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    position: absolute;

    padding: 1rem;
    z-index: 10;

    border: 1px dashed ${(props) => props.theme.colors['OUTER_SPACE'][1]};
    border-radius: 50%;

    &:hover {
        transform: rotate(10deg);
        border: 2px dashed ${(props) => props.theme.colors['RED'][1]};
        animation-name: ${InfiniteRotate};
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:active {
        border: 1px dashed ${(props) => props.theme.colors['RED'][1]};
    }
`;

const AvatarUpload = ({ children, ...props }) => {
    return (
        <AvatarContainer {...props}>
            <AvatarUploadContainer />
            {children}
        </AvatarContainer>
    );
};

export default AvatarUpload;
