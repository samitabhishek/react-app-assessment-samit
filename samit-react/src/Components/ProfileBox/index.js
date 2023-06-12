import React, { useContext } from 'react'
import './index.css'
import { UserContext } from '../../App';

export default function ProfileBox(props) {

    const user = useContext(UserContext);
    const { profilePicUrl, name, designation, organisation } = user

    return (
        <div className='profile-box-root'>
            <div className='name-box-profile-box'>
                <div>
                    <div>
                        {
                            profilePicUrl
                                ?
                                <img src={profilePicUrl} alt={name} className='profile-picture' />
                                :
                                <div className='profile-picture-placeholder'></div>
                        }
                    </div>
                </div>
                <div className='designation-box-profile'>
                    <a>{name}</a>
                    <a>{designation}&nbsp;at&nbsp;</a>
                    <a href="#">{organisation}</a>
                </div>
            </div>
            <div className='view-btn-profile-box'>View Profile</div>
            <div className='links-box-profile'>
                <p className='account-label-profile'>Account</p>
                <div className='menu-item-profile-box'><a>Settings & Privacy</a></div>
                <div className='menu-item-profile-box'><a>Help</a></div>
                <div className='menu-item-profile-box'><a>Language</a></div>
            </div>
        </div>
    )
}
