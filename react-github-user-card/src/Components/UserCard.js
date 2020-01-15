import React from 'react';
import   { Card, CardImg, CardBody,
CardTitle, CardSubtitle } from 'reactstrap';
import '../index.css';


const UserCard = (props) => {
    return(
        <div className="user-card-div">
            <Card className='card'>
                <CardImg className="card-img" src={props.userData.avatar_url} />
                <CardBody className="card-body">
                    <CardTitle> {props.userData.name} </CardTitle>
                    <CardSubtitle> {props.userData.bio} </CardSubtitle>
                    <CardSubtitle> {props.userData.location} </CardSubtitle>
                    <div>
                        <h5> Followers: {props.userData.followers} </h5>
                        <h5> Following: {props.userData.following} </h5>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCard;