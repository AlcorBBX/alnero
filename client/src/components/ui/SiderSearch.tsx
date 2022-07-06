import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import './siderSearch.sass'

export const SiderSearch = () => {
    return (
        <div style={{display: 'flex', position: 'relative'}}>
            <SearchOutlined className='siderSearchIcon' style={{fontSize: '24px'}}/>
            {/* <p className='siderSearchLabel'>Search</p> */}
            <input placeholder='Search' className='siderSearchInput'/>
            <CloseOutlined className='siderSearchIcon' style={{fontSize: '24px'}}/>
        </div>
    )
}