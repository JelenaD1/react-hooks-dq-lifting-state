import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);

const [userTweets, setUserTweets] = useState(0)

const handleViewTweetsClick = (id) => {
  setUserTweets(id -1)
}





  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList onClickHandleTweets={handleViewTweetsClick} users={users} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={users[userTweets]} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
