import styled, { css } from 'styled-components';
import { StyledThemePropsType } from '../../config/theme';
import { H5Style, LabelStyle } from '../../config/typography';

export const FilesProcessingContainer = styled.div`
    width: 360px;
    min-height: 56px;
    max-height: 410px;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 16px;
    right: 20px;
    z-index: 10;
`;

type FilesProcessingHeaderProps = {
    isCollapsedList: boolean;
};

export const FilesProcessingHeader = styled.div<FilesProcessingHeaderProps>`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 16px;
    background-color: ${(props: StyledThemePropsType) =>
        props.theme.colors.secondary};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    ${(props: FilesProcessingHeaderProps) =>
        props.isCollapsedList &&
        css`
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        `};
`;

export const FilesProcessingHeaderText = styled.div`
    ${H5Style};
    color: ${(props: StyledThemePropsType) =>
        props.theme.colors.backgroundPaper};
`;

export const FilesProcessingList = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 352px;
    background-color: ${(props: StyledThemePropsType) =>
        props.theme.colors.backgroundPaper};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    padding: 0 24px 16px 16px;
    overflow-y: scroll;
`;

export const FileProcessingListGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 16px;

    & div:last-of-type {
        margin-bottom: 0;
    }
`;

export const FileProcessingListGroupText = styled.div`
    ${LabelStyle};
    color: ${({ theme }: StyledThemePropsType) => theme.colors.neutralDark};
`;
