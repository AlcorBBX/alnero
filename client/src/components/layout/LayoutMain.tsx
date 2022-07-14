import React, { FC } from 'react'
import { Layout } from 'antd';
import './layoutChat.css'
import ChatContentHeader from '../ChatContentHeader';
import ChatSiderHeader from '../ChatSiderHeader';
import ChatSiderContent from '../ChatSiderContent';
import FooterInput from '../ui/FooterInput'
const { Header, Sider, Content, Footer } = Layout;


const LayoutMain:FC = () => {
  return (
    <Layout>
      <Sider width={'365px'} style={{height: '100vh', backgroundColor: 'rgba(23, 22, 27, 1)'}}>
        <Header style={{height: '55px', backgroundColor: 'rgba(23, 22, 27, 1)', lineHeight: '1', padding: '0 12px'}}>
          <ChatSiderHeader/>
        </Header>
        <Content style={{backgroundColor: 'rgba(33, 30, 33, 1)'}}>
          <ChatSiderContent/>
          <ChatSiderContent/>
          <ChatSiderContent/>
          <ChatSiderContent/>
          <ChatSiderContent/>
          <ChatSiderContent/>
          <ChatSiderContent/>
        </Content>
      </Sider>
      <Layout> 
        <Content style={{backgroundColor: 'rgba(33, 30, 33, 1)'}}></Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain