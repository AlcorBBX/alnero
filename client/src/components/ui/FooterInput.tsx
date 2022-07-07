import { PaperClipOutlined, SmileOutlined, SendOutlined } from '@ant-design/icons'
import React from 'react'
import './footerInput.sass'

const FooterInput = () => {
  return (
    <div className='FooterMessageWrap'>
        <SmileOutlined className='FooterMessageIcon'/> 
        <input className='FooterMessageInput' placeholder='Сообщение'/>
        <PaperClipOutlined className='FooterMessageIcon'/>
        <SendOutlined className='FooterMessageIcon'/>
    </div>
  )
}

export default FooterInput