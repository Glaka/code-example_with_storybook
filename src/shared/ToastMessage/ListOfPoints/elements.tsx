import styled from 'styled-components';
import { StyledThemePropsType } from '../../../config/theme';
import { BodyStyle } from '../../../config/typography';

export const ListOfPointsWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 16px 0 12px;
    margin: 0;
    max-height: 60vh;
    overflow-y: scroll;
    pointer-events: all;
    background: ${({ theme }: StyledThemePropsType) =>
        theme.colors.backgroundPaper};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    list-style-position: inside;
`;

export const ListItem = styled.li`
    ${BodyStyle};
    margin-bottom: 16px;
    margin-right: 16px;

    &::marker {
        font-size: 14px;
    }
`;
