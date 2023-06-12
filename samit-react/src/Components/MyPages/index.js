import React, { useState } from 'react'
import ListItem from '../ListItem'
import './index.css'

export default function MyPages(props) {

    const { list } = props

    

    return (
        <div className='page-list-root'>
            <p className='list-title-my-pages'>My Pages</p>
            {
                list.map(item =>
                    <ListItem
                        icon={item.iconUrl}
                        name={item.name}
                        description={item.description}
                        quantity={item.quantity}
                    />)
            }

        </div>
    )
}
