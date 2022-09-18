import styled from 'styled-components';

const styles = {
    color: ({ theme, color }) => {
        if (color) {
            return theme.colors[color][theme.colors[color].length > 1 ? 1 : 0];
        }
        return theme.colors['OUTER_SPACE'][1];
    },
    width: ({ width }) => {
        if (width?.length) {
            return width[0];
        } else {
            return '100%';
        }
    },
    widthLg: ({ width }) => {
        if (width?.length) {
            return width[width.length - 1];
        } else {
            return '100%';
        }
    },
};

const Divider = styled.hr`
    width: ${styles.width};
    border: 0.5px solid ${styles.color};

    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        width: ${styles.width};
    }
`;

Divider.defaultProps = {
    color: 'OUTER_SPACE',
};

export default Divider;
