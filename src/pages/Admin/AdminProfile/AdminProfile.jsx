import React from 'react'
import Hero from '../../../components/Hero/Hero';

const Profile = () => {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <Hero heroImg="/img/header-4.jpg" title="profile" />
            PROFILE
        </div>
    )
}

export default Profile;
