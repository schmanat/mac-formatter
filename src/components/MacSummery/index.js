import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const MacSummeryContainer = styled.div`
    padding-top: 3rem;
`;
const { Title } = Typography;

const MacSummery = props => {
    return (
        <MacSummeryContainer>
            {Object.keys(props.macAddress).map((mac, i) => (
                <Title copyable level={4} key={i}>
                    {props.macAddress[mac]}
                </Title>
            ))}
        </MacSummeryContainer>
    );
};

export default MacSummery;
