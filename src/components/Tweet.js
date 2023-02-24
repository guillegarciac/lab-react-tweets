import React from 'react';
import ProfileImage from '../components/ProfileImage';
import User from '../components/User';
import Timestamp from '../components/Timestamp';

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

        <p className="message">
        {tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
