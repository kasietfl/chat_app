import React from 'react';
import propTypes from 'prop-types';

import { generateAvatarFromHash } from './../../utils/helpers';

import './Avatar.scss';

const Avatar = ({ user }) => {
    if(user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            />
        );
    } else {
        const color = generateAvatarFromHash(user._id);
        const firstNameLetter = user.fullname.charAt(0).toUpperCase();
        return (
            <div 
                style={{backgroundColor: color}}
                className="avatar avatar--symbol">
                    {firstNameLetter}
            </div>
        )
    }
};

Avatar.propTypes = {
    className: propTypes.string
};

export default Avatar;