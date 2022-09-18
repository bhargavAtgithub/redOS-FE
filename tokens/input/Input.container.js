import styled from 'styled-components';

const styles = {
    iconColor: ({ color, theme }) => {
        return theme.colors[color][0];
    },
};

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    padding: 2rem;

    width: ${(props) =>
        props.width && props.width[0] ? props.width[0] + 'rem' : '100%'};

    background-color: ${(props) => props.theme.colors['CARD'][0]};
    border: 1px solid ${(props) => props.theme.colors['BORDER'][0]};
    border-radius: 1.5rem;

    @media (min-width: ${(props) => props.theme.devices['lg']}) {
        width: ${(props) =>
            props.width && props.width[props.width.length - 1]
                ? props.width[props.width.length - 1] + 'rem'
                : '100%'};
    }
`;

export const LabelContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 0.5rem;
`;

export const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    path {
        fill: ${styles.iconColor};
        stroke: ${styles.iconColor};
    }
`;
