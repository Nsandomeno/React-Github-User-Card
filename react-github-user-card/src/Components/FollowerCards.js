import React from 'react';
import '../index.css';
import Follower from  './Follower.js';

 



function FollowerCards(props) {
    console.log("These are the props in the Follower card file:", props)
    return(
        <section className="container-div">
           {props.followerData.map((follower =>

           
        <Follower follower={follower} />

    ))}
       </section>
    )
}

export default FollowerCards;