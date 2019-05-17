import React, { useState } from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';
import MacInput from './components/MacInput';
import MacSummery from './components/MacSummery';
import Logo from './logo.svg';
import './App.css';

const { Content, Footer, Header } = Layout;

const formatInput = inputValue => {
    let formatedMacAddresses = {};

    const splittedMacAddress = inputValue
        .replace(/[:-]/g, '')
        .match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g);

    console.log(splittedMacAddress);

    if (inputValue !== '') {
        formatedMacAddresses.empty = splittedMacAddress.join('');
        formatedMacAddresses.hyphen = splittedMacAddress.join('-');
        formatedMacAddresses.colon = splittedMacAddress.join(':');
    }

    return formatedMacAddresses;
};

const App = () => {
    const [macAddress, setMacAddress] = useState('');
    return (
        <React.Fragment>
            <Layout>
                <Header
                    style={{
                        background: '#fff',
                        borderBottom: '1px solid #e8e8e8'
                    }}
                >
                    <img src={Logo} style={{ height: '50px' }} />
                    <Menu
                        theme='light'
                        mode='horizontal'
                        style={{
                            lineHeight: '62px',
                            float: 'right'
                        }}
                    >
                        <Menu.Item>
                            <Icon type='question-circle' />
                            About
                        </Menu.Item>
                        <Menu.Item>
                            <a
                                href='https://github.com/schmanat'
                                title='macFormatter Repositority on Github'
                            >
                                <Icon type='github' />
                                Github
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className='content'>
                    <Row gutter={16}>
                        <Col span={6} offset={9} style={{ padding: '4rem 0' }}>
                            <MacInput
                                onInput={input =>
                                    setMacAddress(
                                        formatInput(
                                            input.target.value.toUpperCase()
                                        )
                                    )
                                }
                                maxLength={17}
                            />
                            <MacSummery macAddress={macAddress} />
                        </Col>
                    </Row>
                </Content>
                <Footer>© schman.rocks - {new Date().getFullYear()}</Footer>
            </Layout>
        </React.Fragment>
    );
};

export default App;
