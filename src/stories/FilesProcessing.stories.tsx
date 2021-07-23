import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import {
    AsyncOperation,
    ASYNC_OPERATION_STATUS,
    ASYNC_OPERATION_TYPE,
} from '../types';
import { FilesProcessing, FilesProcessingProps } from './FilesProcessing/index';

const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: 20%;
`;

const mocks: AsyncOperation[] = [
    {
        requestId: 'uuid',
        fileName:
            'Forms_Everton Construction Partners o Forms_Everton Construction Partners o.csv',
        status: ASYNC_OPERATION_STATUS.PENDING,
        result: {},
        type: ASYNC_OPERATION_TYPE.IMPORT,
    },
    {
        requestId: 'uuid',
        fileName:
            'Forms_Everton Construction Partners o Forms_Everton Construction Partners o.csv',
        status: ASYNC_OPERATION_STATUS.PENDING,
        result: {},
        type: ASYNC_OPERATION_TYPE.EXPORT,
    },
    {
        requestId: 'uuid',
        fileName:
            'Forms_Everton Construction Partners o Forms_Everton Construction Partners o.csv',
        status: ASYNC_OPERATION_STATUS.DONE,
        result: {},
        type: ASYNC_OPERATION_TYPE.IMPORT,
    },
    {
        requestId: 'uuid',
        fileName:
            'Forms_Everton Construction Partners o Forms_Everton Construction Partners o.csv',
        status: ASYNC_OPERATION_STATUS.FAILED,
        result: {},
        type: ASYNC_OPERATION_TYPE.EXPORT,
    },
];

export const FilesProcessingModal = () => {
    const [displayList, setDisplayList] = useState<boolean>(true);
    const [isExpandedList, setIsExpandedList] = useState<boolean>(false);

    const toggleDisplay = useCallback((state: boolean) => {
        setDisplayList(state);
        setIsExpandedList(false);
    }, []);

    const toggleListViewMode = useCallback(
        () => setIsExpandedList(!isExpandedList),
        [isExpandedList]
    );

    const [asyncOperations, setAsyncOperations] = useState<AsyncOperation[]>(
        mocks
    );

    const removeCompletedItems = useCallback(
        () =>
            setAsyncOperations((prev) =>
                prev.filter(
                    ({ status }) =>
                        status === ASYNC_OPERATION_STATUS.PENDING ||
                        status === ASYNC_OPERATION_STATUS.IN_PROGRESS
                )
            ),
        []
    );

    const displayFileProcessing: boolean = !!(
        asyncOperations.length && displayList
    );
    const showFileProcessing = useCallback(() => toggleDisplay(true), [
        toggleDisplay,
    ]);
    const hideFileProcessing = useCallback(() => toggleDisplay(false), [
        toggleDisplay,
    ]);

    const fileProcessingOptions: FilesProcessingProps = {
        backgroundOperations: asyncOperations,
        isExpandedList,
        toggleListViewMode,
        displayList,
        hideFileProcessing,
        removeCompletedItems,
    };

    return (
        <Col>
            <Button onClick={showFileProcessing} size="s">
                Show File Processing
            </Button>
            <Wrapper>
                {displayFileProcessing ? (
                    <FilesProcessing options={fileProcessingOptions} />
                ) : null}
            </Wrapper>
        </Col>
    );
};

export default {
    component: FilesProcessingModal,
    title: 'FilesProcessingModal',
};
