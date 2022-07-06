import React, { FC } from 'react'
import { Avatar, Input } from 'antd';
import { SiderSearch } from './ui/SiderSearch';

const { Search } = Input;


function onSearch(params:string) {
    console.log('Даня лох.ком',params);
}

const ChatSiderHeader:FC = () => {
  return (
    <div style={{display: 'flex', justifyContent:'space-around', height: '100%', alignItems: 'center'}}>
      {/* <Search placeholder="Search" allowClear onSearch={onSearch} style={{ width: 130 }} /> */}
      <SiderSearch/>
      <Avatar className='' 
              size={40} 
              src="https://joeschmoe.io/api/v1/random" 
              alt="Han Solo" />
    </div>
    
    
  )
}

export default ChatSiderHeader