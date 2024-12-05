import Search from 'antd/es/input/Search'
import React from 'react'

export default function TicketSearch({ listPhim }) {

    return (
        <div className='w-full h-full'>
            <div>
                <span>Vui lòng chọn</span>
            </div>  
            <Search placeholder="input search text" enterButton className='w-full h-full' />
        </div>
    )
}
