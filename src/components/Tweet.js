import React from 'react';
import ProfileImage from '../components/ProfileImage';
import User from '../components/User';
import Timestamp from '../components/Timestamp';
import Message from '../components/Message';
import Actions from '../components/Actions'

function Tweet(props) {
  const {tweet} = props; /* the tweet constant equals the props of the each tweetsArray[i] referenced in App.js*/
  /* This is the same as doing 
  function Tweet({ tweet }) { */
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/> {/* image = the tweet.user.image and its props are accessed in ProfileImage.js component*/}
      {/* if we don't desconstruct tweet, then we could also access its props by doing
      image={props.tweet.user.image} */}
      <div className="body">
        <div className="top">
          <User userData={tweet.user}/>
          <Timestamp time={tweet.timestamp}/>
        </div>
        <Message message={tweet.message}/>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
