import { CheckOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React, { FC, useState } from 'react'
import './chatSiderContent.sass'

const ChatSiderContent:FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='chatSiderContent'>
        <div className='chatSiderContentInner' style={{display: 'flex', width: '100%', padding: '16px 16px 5px 16px'}}>
            <div className='chatSiderContentAvatarContainer'>
                <Avatar className='chatSiderContentAvatar' 
                  size={40} 
                  src="https://joeschmoe.io/api/v1/random" 
                  alt="Han Solo" />
            </div>
            <div style={{ width: '100%', cursor: 'pointer'}}>
              <div style={{display: 'flex', alignItems: 'center', height: '24px', width: '100%'}}>              
                  <p className='chatSiderContentName' style={{marginRight: '10px'}}>Chatgram</p>             
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <CheckOutlined style={{color: 'gold', fontSize: '16px'}}/>            
                    <p style={{
                      fontSize: '12px',
                      color: '#FFFFFF'
                    }}>19:48</p>    
                  </div>            
              </div>
                
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '24px'}}>               
                  <p className='chatSiderContentAvtivity'>Chatgram Web was updated.</p>
                  <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />         
              </div>
                
            </div>
        </div>
        <div className='chatSiderContentInner'>
          
        </div>
    </div>
  )
}

export default ChatSiderContent