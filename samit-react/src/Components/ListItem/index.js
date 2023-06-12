import React from 'react'
import './index.css'

export default function ListItem(props) {

    const { icon, name, description, quantity } = props
    return (
        <div className='root-list-item'>
            <div>
                {
                    icon
                        ?
                        <img src={icon} alt={name} className='icon-list-item' />
                        :
                        <div className='dummy-icon-placeholder'></div>
                }
            </div>
            <div className='info-box-list-item'>
                <a>{name}</a>
                <a>{description}</a>
            </div>
            <div className="quantity-box-list-item">
                {quantity}
            </div>
        </div>
    )
}
