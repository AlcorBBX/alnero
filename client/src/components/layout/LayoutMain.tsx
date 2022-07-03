import React, { FC } from 'react'
import { Layout } from 'antd';
import InputSearch from '../ui/InputSearch';
import SiderChats from '../SiderChats';
import './layoutMain.css'
const { Header, Footer, Sider, Content } = Layout;


const LayoutMain:FC = () => {
  return (
    <Layout>
      <Sider style={{height: '100vh', backgroundColor: 'rgba(23, 22, 27, 1)'}}>
        <SiderChats/>
      </Sider>
      <Layout>
        <Header style={{backgroundColor: 'rgba(23, 22, 27, 1)'}}>Header</Header>
        <Content style={{backgroundColor: 'rgba(33, 30, 33, 1)'}}>Content</Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain