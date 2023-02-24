import React from 'react';

const ProfileImage = (props) => {
  const {image} = props; /* the image constant equals the props of the each tweet referenced in Tweet.js*/
  return (
    <div>
      <img src={image} className="profile" alt="profileImage"></img>
    </div>
  )
}

export default ProfileImage;