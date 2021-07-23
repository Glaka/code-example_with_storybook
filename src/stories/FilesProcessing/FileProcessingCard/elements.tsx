import styled from 'styled-components';
import { StyledThemePropsType } from '../../../config/theme';
import { H5Style, LabelStyle } from '../../../config/typography';
import { ASYNC_OPERATION_STATUS } from '../../../types';

export const FileProcessingCardContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const FileProcessingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FileProcessingCardFileName = styled.div`
    ${H5Style};
    white-space: nowrap;
`;

type FileProcessingCardStatusProps = {
    status: ASYNC_OPERATION_STATUS;
};

export const FileProcessingCardStatus = styled.div<FileProcessingCardStatusProps>`
    ${LabelStyle};
    color: ${({
        theme,
        status,
    }: StyledThemePropsType & FileProcessingCardStatusProps) => {
        return status === ASYNC_OPERATION_STATUS.FAILED
            ? theme.colors.error
            : theme.colors.neutralDark;
    }};
`;
