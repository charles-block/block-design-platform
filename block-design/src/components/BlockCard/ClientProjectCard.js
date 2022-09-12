import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pen } from 'react-bootstrap-icons';



const ClientProjectCard = props => {
    return (
        <div>
            <Card border="secondary"  >
                {/* <Card.Header>{props.date}</Card.Header> */}
                <Card.Header>
                    <Row>
                        <Col xs={9} md={8}>{props.date}</Col>
                        <Col md={{ span: 1, offset: 2 }}><Button size="sm" variant="light"><Pen size={15} color='grey' /></Button></Col>
                    </Row>
                </Card.Header>
                <Card.Img variant="top" src={props.selectedFile} style={styles.cardImage} />
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

const styles = {
    cardImage: {
      objectFit: 'cover',
      height: 320
    }
  }

export default ClientProjectCard;


