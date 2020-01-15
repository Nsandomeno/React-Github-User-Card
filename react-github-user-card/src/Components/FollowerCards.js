import React from 'react';
import '../index.css';
import Follower from  './Follower.js';

 



function FollowerCards(props) {
    console.log("These are the props in the Follower card file:", props)
    return(
        <div className="container-div">
           {props.followerData.map((follower =>

        <div className="follower-card-div"> 
        <Follower follower={follower} />
        </div>

    ))}
       </div>
    )
}

export default FollowerCards;