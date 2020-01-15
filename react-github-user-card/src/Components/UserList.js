import React from 'react';

import FollowerCards from './FollowerCards.js';
import UserCard from './UserCard.js';
import '../index.css';



const UserList = (props) => {
    console.log("These are userList props", props)

    return(
      
            <div>
            <UserCard userData={props.userData} />
            <FollowerCards followerData={props.followerData} />
            </div>

            
    )

}
export default UserList;
