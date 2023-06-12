import React, { useState } from 'react'
import MyPages from '../../Components/MyPages'
import ProfileBox from '../../Components/ProfileBox'
import './index.css'

export default function LandingPage(props) {

  const [dummyList, setDummyList] = useState([
    {
      iconUrl: '',
      name: 'UI Desgin Daily',
      description: 'Design',
      quantity: 5
    },
    {
      iconUrl: '',
      name: 'UI Desgin Daily 2',
      description: 'Design',
      quantity: 3
    },
    {
      iconUrl: '',
      name: 'UI Desgin Daily 3',
      description: 'Design',
      quantity: 1
    },
    {
      iconUrl: '',
      name: 'UI Desgin Daily 4',
      description: 'Design',
      quantity: 8
    },
  ])

  return (
    <div className="root-landing">
      <div className='floating-div-left'>
        <MyPages
          list={dummyList}
        />
      </div>
      <div className='ellipse'>
        {/* Dummy DIV for Ellipse */}
      </div>
      <div className='floating-div-right'>
        <ProfileBox />
      </div>
    </div>
  )
}
