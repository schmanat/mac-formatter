import React from 'react';
import { Input } from 'antd';

const MacInput = props => {
    return (
        <React.Fragment>
            <Input
                placeholder='Mac Address'
                size='large'
                onChange={props.onInput}
                maxLength={props.maxLength}
                allowClear
            />
        </React.Fragment>
    );
};

export default MacInput;
