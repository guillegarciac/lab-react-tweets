/* import React from 'react' */

const ProfileImage = (props) => {
  const {image} = props;
  return (
    <div>
      <img src={image} className="profile" alt="profileImage"></img>
    </div>
  )
}

export default ProfileImage;