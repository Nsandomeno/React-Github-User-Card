import React from 'react';
import   { Card, CardImg, CardBody,
     CardTitle, CardSubtitle } from 'reactstrap';
import '../index.css';

const Follower = (props) => {
    console.log("These are the props from the follower comp.:", props)
    return(
        <Card>
            <CardImg src={props.follower.avatar_url}/>
            <CardBody>
                <CardTitle> {props.follower.name} </CardTitle>
                <CardSubtitle> {props.follower.bio} </CardSubtitle>
                <CardSubtitle> {props.follower.location} </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default Follower;