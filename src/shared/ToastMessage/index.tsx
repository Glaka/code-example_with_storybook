import React, { FC } from 'react';
import { DefinedIcons } from '../../types/index';
import CustomIcon from '../CustomIcon';
import ActionsBox from './ActionsBox/index';
import {
    ToastButton,
    ToastContent,
    ToastContentWrapper,
    ToastMessageWrapper,
    ToastText,
} from './elements';
import ListOfPoints from './ListOfPoints/index';

type ToastProps = {
    backgroundColor: 'secondary' | 'danger' | 'success';
    opacity: number;
    icon: DefinedIcons;
    message: string;
    showButton: boolean;
    buttonText?: string;
    onClick?(): void;
    list?: string[];
    hideToast?(): void;
    listAction?(): void;
    showList?: boolean;
};

const ToastMessage: FC<ToastProps> = ({
    backgroundColor,
    opacity,
    icon,
    message,
    showButton,
    buttonText,
    onClick,
    list,
    hideToast,
    listAction,
    showList,
}) => {
    const actualListIcon: DefinedIcons = showList ? 'collapse' : 'expand';

    return (
        <ToastContentWrapper>
            <ToastContent
                backgroundColor={backgroundColor}
                opacity={opacity}
                showList={showList}
            >
                <ToastMessageWrapper>
                    <CustomIcon
                        icon={icon}
                        iconColor="textOnDark"
                        width="20"
                        height="20"
                        margin="0 18px 0 0"
                        opacity={0.7}
                    />
                    <ToastText>{message}</ToastText>
                </ToastMessageWrapper>
                {showButton && onClick ? (
                    <ToastButton
                        backgroundColor={backgroundColor}
                        onClick={onClick}
                    >
                        {buttonText}
                    </ToastButton>
                ) : null}
                {list?.length ? (
                    <ActionsBox
                        listIcon={actualListIcon}
                        listAction={listAction}
                        crossAction={hideToast}
                    />
                ) : null}
            </ToastContent>
            {showList && list?.length ? <ListOfPoints list={list} /> : null}
        </ToastContentWrapper>
    );
};

export default ToastMessage;
