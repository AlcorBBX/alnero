import { Avatar } from 'antd'
import { SearchOutlined, MoreOutlined } from '@ant-design/icons';
import React, { FC } from 'react'
import './chatContentHeader.sass'

const ChatContentHeader:FC = () => {
  return (
    <div className='chatContentHeader'>
        <div className='chatContentHeaderInner' style={{display: 'flex'}}>
            <div className='chatContentHeaderAvatarContainer'>
                <Avatar className='chatContentHeaderAvatar' 
                  size={40} 
                  src="https://joeschmoe.io/api/v1/random" 
                  alt="Han Solo" />
            </div>
            <div>
                <p className='chatContentHeaderName'>David Moor</p>
                <p className='chatContentHeaderAvtivity'>last seen 5 mins ago</p>
            </div>
        </div>
        <div className='chatContentHeaderInner'>
          <SearchOutlined className='chatContentHeaderSearch' style={{fontSize: '24px'}}/>
          <MoreOutlined className='chatContentHeaderMore' style={{fontSize: '24px'}} />
        </div>
    </div>
  )
}

export default ChatContentHeader