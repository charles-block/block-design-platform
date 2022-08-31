import React from 'react';
import Card from 'react-bootstrap/Card';



const ClientProjectCard = props => {
    return (
        <div>
            <Card border="secondary"  >
                <Card.Header>{props.date}</Card.Header>
                <Card.Img variant="top" src={props.selectedFile} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>Designer: {props.designerName}</Card.Text>
                    <Card.Text>Client: {props.clientName}</Card.Text>
                    <Card.Text>{props.content}</Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>

    )
}


export default ClientProjectCard;


