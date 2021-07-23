import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import PasswordField from './index';

const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: 20%;
`;

export const All = () => {
    const [val, setVal] = useState('start');
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value);
    }, []);

    return (
        <div>
            <Col>
                <Wrapper>
                    <PasswordField
                        label="Label Regular"
                        placeholder="Input text Regular"
                        initialVisibility={false}
                        value={val}
                        onChange={onChange}
                        helpText="Help text Regular"
                    />
                </Wrapper>
                <Wrapper>
                    <PasswordField
                        label="Label Disabled"
                        placeholder="Input text Disabled"
                        initialVisibility={false}
                        value={val}
                        onChange={onChange}
                        helpText="Help text Disabled"
                        disabled={true}
                    />
                </Wrapper>
                <Wrapper>
                    <PasswordField
                        label="Label error"
                        placeholder="Input text error"
                        initialVisibility={false}
                        value={val}
                        onChange={onChange}
                        helpText="Help text error"
                        error={true}
                    />
                </Wrapper>
            </Col>
        </div>
    );
};

export default {
    component: PasswordField,
    title: 'PasswordField',
};
