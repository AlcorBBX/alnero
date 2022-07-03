import React, { FC } from 'react'
import { Layout } from 'antd';
import './layoutMain.css'
const { Header, Sider, Content } = Layout;


const LayoutMain:FC = () => {
  return (
    <Layout>
      <Sider style={{height: '100vh', backgroundColor: 'rgba(23, 22, 27, 1)'}}>
        
      </Sider>
      <Layout>
        <Header style={{backgroundColor: 'rgba(23, 22, 27, 1)'}}>Header</Header>
        <Content style={{backgroundColor: 'rgba(33, 30, 33, 1)'}}>Content</Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain