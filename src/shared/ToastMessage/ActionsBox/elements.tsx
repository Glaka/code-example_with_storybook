import styled from 'styled-components';
import CustomIcon from '../../CustomIcon';

export const ActionsBoxWrapper = styled.div`
    display: flex;
    margin-left: 24px;
`;

export const ClickableCustomIcon = styled(CustomIcon)`
    pointer-events: all;
    cursor: pointer;
`;
