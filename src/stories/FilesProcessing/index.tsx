import React, { FC, useMemo } from 'react';
import ReactTooltip from 'react-tooltip';
import ActionsBox from '../../shared/ToastMessage/ActionsBox';
import { ClickableCustomIcon } from '../../shared/ToastMessage/ActionsBox/elements';
import {
    AsyncOperation,
    ASYNC_OPERATION_STATUS,
    ASYNC_OPERATION_TYPE,
    DefinedIcons,
} from '../../types';
// import { ClickableCustomIcon } from '../ToastMessage/ActionsBox/elements';
// import ActionsBox from '../ToastMessage/ActionsBox/index';
import {
    FileProcessingListGroup,
    FileProcessingListGroupText,
    FilesProcessingContainer,
    FilesProcessingHeader,
    FilesProcessingHeaderText,
    FilesProcessingList,
} from './elements';
import FileProcessingCard from './FileProcessingCard/index';

export type FilesProcessingProps = {
    backgroundOperations: AsyncOperation[];
    displayList: boolean;
    hideFileProcessing(): void;
    isExpandedList: boolean;
    toggleListViewMode(): void;
    removeCompletedItems(): void;
};

export const FilesProcessing: FC<{ options: FilesProcessingProps }> = ({
    options: {
        backgroundOperations,
        displayList,
        hideFileProcessing,
        isExpandedList,
        toggleListViewMode,
        removeCompletedItems,
    },
}) => {
    const showList: boolean = displayList && !!backgroundOperations.length;
    const actualListIcon: DefinedIcons = isExpandedList ? 'expand' : 'collapse';
    const finishedOperations = useMemo(
        () =>
            backgroundOperations.filter(
                (op) => op.status === ASYNC_OPERATION_STATUS.DONE
            ).length,
        [backgroundOperations]
    );
    const total = backgroundOperations.length;

    const sortedOperations = useMemo(
        () =>
            backgroundOperations.reduce<{
                downloadingList: AsyncOperation[];
                uploadingList: AsyncOperation[];
            }>(
                (acc, op) => {
                    if (
                        op.type === ASYNC_OPERATION_TYPE.DOWNLOAD ||
                        op.type === ASYNC_OPERATION_TYPE.EXPORT
                    ) {
                        acc.downloadingList.push(op);
                    } else if (
                        op.type === ASYNC_OPERATION_TYPE.UPLOAD ||
                        op.type === ASYNC_OPERATION_TYPE.IMPORT
                    ) {
                        acc.uploadingList.push(op);
                    }

                    return acc;
                },
                {
                    downloadingList: [],
                    uploadingList: [],
                }
            ),
        [backgroundOperations]
    );

    return (
        <>
            {showList ? (
                <FilesProcessingContainer>
                    <FilesProcessingHeader isCollapsedList={displayList}>
                        <ReactTooltip
                            id="removeCompletedItems"
                            multiline={false}
                            effect="solid"
                            place="top"
                            arrowColor="transparent"
                            offset={{ top: 10, left: -65 }}
                        />
                        <ClickableCustomIcon
                            data-for="removeCompletedItems"
                            data-tip="Remove completed items"
                            onClick={removeCompletedItems}
                            icon="readMessage"
                            iconColor="backgroundPaper"
                            hoverColor="secondaryLight"
                            width="24"
                            height="24"
                            margin="0 16px 0 0"
                            opacity={0.7}
                        />
                        <FilesProcessingHeaderText>{`Files Processing: ${finishedOperations} of ${total} done`}</FilesProcessingHeaderText>
                        <ActionsBox
                            listIcon={actualListIcon}
                            listAction={toggleListViewMode}
                            crossAction={hideFileProcessing}
                        />
                    </FilesProcessingHeader>
                    {isExpandedList ? (
                        <FilesProcessingList>
                            {sortedOperations.downloadingList.length ? (
                                <FileProcessingListGroup>
                                    <FileProcessingListGroupText>
                                        Downloading
                                    </FileProcessingListGroupText>
                                    {sortedOperations.downloadingList.map(
                                        ({
                                            fileName,
                                            type,
                                            status,
                                            requestId,
                                        }) => (
                                            <FileProcessingCard
                                                key={requestId}
                                                fileName={fileName}
                                                icon="files"
                                                status={status}
                                                type={type}
                                            />
                                        )
                                    )}
                                </FileProcessingListGroup>
                            ) : null}
                            {sortedOperations.uploadingList.length ? (
                                <FileProcessingListGroup>
                                    <FileProcessingListGroupText>
                                        Uploading
                                    </FileProcessingListGroupText>
                                    {sortedOperations.uploadingList.map(
                                        ({
                                            fileName,
                                            type,
                                            status,
                                            requestId,
                                        }) => (
                                            <FileProcessingCard
                                                key={requestId}
                                                fileName={fileName}
                                                icon="files"
                                                status={status}
                                                type={type}
                                            />
                                        )
                                    )}
                                </FileProcessingListGroup>
                            ) : null}
                        </FilesProcessingList>
                    ) : null}
                </FilesProcessingContainer>
            ) : null}
        </>
    );
};

// export default FilesProcessing;
