import "./App.css";
import Tweet from "./components/Tweet";
import {tweetsArray as tweets} from './data/data'

const App = () => {
  return (
    <div className="App">
      {tweets.map(elem => {
        return <Tweet key={elem._id} tweet={elem} />
      })}
      {/* <Tweet tweet={ tweets[0] }/>  tweet = the object of the tweetsArray[i] and its props will be accessed in Tweet.js component
       Behind sceners this basically doing
      Tweet({
        tweet: tweetsArray[1]
      }) 
      <Tweet tweet={ tweets[1] }/>
      <Tweet tweet={ tweets[2] }/> */}
    </div>
  );
}

export default App;
