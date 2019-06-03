import React, { useState } from 'react';
import { Layout, Row, Col, Menu, Icon } from 'antd';
import MacInput from './components/MacInput';
import MacSummery from './components/MacSummery';
import Logo from './logo.svg';

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
            <Layout style={{ height: '100vh' }}>
                <Header
                    style={{
                        background: '#fff',
                        borderBottom: '1px solid #e8e8e8'
                    }}
                >
                    <a href='/' title='MacFormatter'>
                        <img
                            src={Logo}
                            style={{ height: '50px' }}
                            alt='MacFormatter Logo'
                        />
                    </a>
                    <Menu
                        theme='light'
                        mode='horizontal'
                        style={{
                            lineHeight: '62px',
                            float: 'right'
                        }}
                    >
                        <Menu.Item>
                            <a
                                href='https://github.com/schmanat'
                                title='MacFormatter Repositority on Github'
                            >
                                <Icon type='github' />
                                Github
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '24px 50px' }}>
                    <Row gutter={16}>
                        <Col span={6} offset={9} style={{ padding: '4rem 0' }}>
                            <MacInput
                                onInput={input =>
                                    setMacAddress(
                                        formatInput(input.target.value)
                                    )
                                }
                                maxLength={17}
                            />
                            <MacSummery macAddress={macAddress} />
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    © schman.rocks - {new Date().getFullYear()}
                    <div>
                        Icons made by{' '}
                        <a
                            href='https://www.freepik.com/?__hstc=57440181.12f613a98465dba6eb6ed5374fdb0e7a.1558076156676.1558076156676.1558689960531.2&__hssc=57440181.2.1558689960531&__hsfp=3598533524'
                            title='Freepik'
                        >
                            Freepik
                        </a>{' '}
                        from{' '}
                        <a href='https://www.flaticon.com/' title='Flaticon'>
                            www.flaticon.com
                        </a>{' '}
                        is licensed by{' '}
                        <a
                            href='http://creativecommons.org/licenses/by/3.0/'
                            title='Creative Commons BY 3.0'
                            target='_blank'
                        >
                            CC 3.0 BY
                        </a>
                    </div>
                </Footer>
            </Layout>
        </React.Fragment>
    );
};

export default App;
