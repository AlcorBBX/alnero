import React from 'react'
import { Avatar} from 'antd';
import './loginModeVizualization.sass'

const LoginModelVisualization = () => {
  return (
    <div>
        <Avatar className='Avatar' 
              size={140} 
              src="https://joeschmoe.io/api/v1/random" 
              alt="Han Solo" />
    </div>
  )
}

export default LoginModelVisualization