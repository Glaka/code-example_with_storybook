import React, { useCallback } from 'react';
import styled from 'styled-components';
import Icons from '../icons';
import { Icon } from './elements';

type IconButtonProps = {
    visibility: boolean;
    changeState(value: boolean): void;
};

const Button = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    margin: 0 0 0 16px;
    padding: 0;
    width: 14px;
    height: 10px;

    &:active {
        border: none;
        outline: none;
    }
`;

export const IconButton = ({ changeState, visibility }: IconButtonProps) => {
    const activeIcon = visibility ? 'closedEye' : 'eye';
    const handleClick = useCallback(() => changeState(!visibility), [
        changeState,
        visibility,
    ]);

    return (
        <Button onClick={handleClick} type="button">
            <Icon src={Icons[activeIcon] as any} alt={activeIcon} />
        </Button>
    );
};
