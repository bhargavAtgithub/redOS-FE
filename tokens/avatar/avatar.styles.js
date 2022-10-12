import styled from 'styled-components';
import SIZES from './avatar.properties';

const styles = {
    avatarBackground: ({ theme }) => {
        let random = Math.floor(Math.random() * theme.colors['AVATAR'].length);
        let color = theme.colors['AVATAR'][random];
        return color;
    },
};

const AvatarStyles = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: ${(props) => SIZES[props.size]}rem;
    height: ${(props) => SIZES[props.size]}rem;
    border-radius: 50%;

    overflow: hidden;

    background: ${styles.avatarBackground};
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${(props) => SIZES[props.size]}rem;
    height: ${(props) => SIZES[props.size]}rem;

    position: relative;
`;

export { AvatarStyles, ImageContainer };
