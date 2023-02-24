import "./App.css";
import Tweet from "./components/Tweet";
import tweetsArray from './data/data'

const App = () => {
  return (
    <div className="App">
      <Tweet tweet={ tweetsArray[0] }/> {/* tweet = the object of the tweetsArray[i] and its props will be accessed in Tweet.js component*/}
      {/* Behind sceners this basically doing
      Tweet({
        tweet: tweetsArray[1]
      }) */}
      <Tweet tweet={ tweetsArray[1] }/>
      <Tweet tweet={ tweetsArray[2] }/>
    </div>
  );
}

export default App;
