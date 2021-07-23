import React, { FC } from 'react';
import CustomIcon from '../../../shared/CustomIcon';
import {
    ASYNC_OPERATION_STATUS,
    ASYNC_OPERATION_TYPE,
    DefinedIcons,
} from '../../../types/index';
import {
    FileProcessingCardContainer,
    FileProcessingCardFileName,
    FileProcessingCardInfo,
    FileProcessingCardStatus,
} from './elements';
import {
    FILE_PROCESSING_FILE_NAME_LENGTH,
    formatFileName,
    getHelpTextByOperationType,
    getIconByOperationStatus,
} from './helpers';

type FileProcessingCardProps = {
    icon: DefinedIcons;
    fileName: string;
    status: ASYNC_OPERATION_STATUS;
    type: ASYNC_OPERATION_TYPE;
};

const FileProcessingCard: FC<FileProcessingCardProps> = ({
    fileName,
    status,
    type,
}) => {
    const formattedFileName: string = formatFileName(
        fileName,
        FILE_PROCESSING_FILE_NAME_LENGTH
    );
    const icon: DefinedIcons = getIconByOperationStatus(status);
    const statusText = getHelpTextByOperationType({ status, type });

    return (
        <FileProcessingCardContainer>
            <CustomIcon
                icon={icon}
                iconColor="secondary"
                margin="0 16px 0 0"
                width="24"
                height="24"
            />
            <FileProcessingCardInfo>
                <FileProcessingCardFileName>
                    {formattedFileName}
                </FileProcessingCardFileName>
                <FileProcessingCardStatus status={status}>
                    {statusText}
                </FileProcessingCardStatus>
            </FileProcessingCardInfo>
        </FileProcessingCardContainer>
    );
};

export default FileProcessingCard;
