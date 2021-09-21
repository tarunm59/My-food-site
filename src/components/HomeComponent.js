import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
 import {withRouter} from 'react-router';
function Home1(props) {
    return(
        <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
            <Card>
            <CardImg src={props.dish.image} alt={props.dish.name} />
            <CardBody>
            <CardTitle>{props.dish.name}</CardTitle>
            {props.dish.designation ? <CardSubtitle>{props.dish.designation}</CardSubtitle> : null }
            <CardText>{props.dish.description}</CardText>
            </CardBody>
            </Card>
    
            </div>
            <div className="col-12 col-md m-1">
            <Card>
            <CardImg src={props.promotion.image} alt={props.promotion.name} />
            <CardBody>
            <CardTitle>{props.promotion.name}</CardTitle>
            {props.promotion.designation ? <CardSubtitle>{props.promotion.designation}</CardSubtitle> : null }
            <CardText>{props.dish.description}</CardText>
            </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md m-1">
            <Card>
            <CardImg src={props.leader.image} alt={props.leader.name} />
            <CardBody>
            <CardTitle>{props.leader.name}</CardTitle>
            {props.leader.designation ? <CardSubtitle>{props.leader.designation}</CardSubtitle> : null }
            <CardText>{props.leader.description}</CardText>
            </CardBody>
            </Card>
            </div>
        </div>
    </div>
    );
}

       

export default withRouter(Home1);