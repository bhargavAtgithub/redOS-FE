import styled from 'styled-components';

const StickerContainer = styled.div`
    display: inline;
    position: relative;

    width: 13rem;
    height: 2.2rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        width: 20rem;
        height: 3.5rem;
    }
`;

const StickerLink = styled.a`
    width: 100%;
    height: 100%;
    display: contents;
`;

const ChatContainer = styled.div`
    display: inline;
    position: relative;

    width: 13rem;
    height: 13rem;

    @media (min-width: ${(props) => props.theme.devices.lg}) {
        width: 20rem;
        height: 20rem;
    }
`;

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export { StickerContainer, StickerLink, ChatContainer, BlogContainer };
