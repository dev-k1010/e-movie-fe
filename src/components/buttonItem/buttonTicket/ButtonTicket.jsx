import React from 'react'
import "../buttonTicket/style/style.css"
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function ButtonTicket({ urlPath }) {
    const navigate = useNavigate()
    return (
        <button
            onClick={() => navigate(urlPath || "")}
            className="button-container flex justify-center items-center bg-transparent">
            <div className="text-ellipsis line-clamp-1 button-label">Mua vé</div>
            <div className="button-overlay w-full h-full rounded-full">
                <div className="arrow">
                    <ArrowRightOutlined className="text" />
                </div>
            </div>
        </button>
    )
}
