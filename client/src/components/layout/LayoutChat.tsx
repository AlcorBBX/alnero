import React, { FC } from 'react'
import { Layout } from 'antd';
import './layoutChat.css'
import ChatContentHeader from '../ChatContentHeader';
import ChatSiderHeader from '../ChatSiderHeader';
import ChatSiderContent from '../ChatSiderContent';
import FooterInput from '../ui/FooterInput'
const { Header, Sider, Content, Footer } = Layout;


const LayoutChat:FC = () => {
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
        <Header style={{height: '55px', backgroundColor: 'rgba(23, 22, 27, 1)', lineHeight: '1.1'}}>
          <ChatContentHeader/>
        </Header>
        <Content style={{backgroundColor: 'rgba(33, 30, 33, 1)'}}></Content>
        <Footer style={{
          backgroundColor: 'rgb(33, 30, 33)', 
          padding: '84px', 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%'}}>
            <FooterInput/>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutChat