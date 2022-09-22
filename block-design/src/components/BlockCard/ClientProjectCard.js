import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Pen } from 'react-bootstrap-icons';

import { useDispatch } from 'react-redux';

import { deleteClientProjectPosts } from '../../actions/clientProjectPosts';


const ClientProjectCard = props => {

    const dispatch = useDispatch();

    const onPress = () => {
        props.setShow('true');
        props.setCurrentId(props._id);
    }


    return (
        <div>
            <Card border="secondary" key={props._id} >
                {/* <Card.Header>{props.date}</Card.Header> */}
                <Card.Header>
                    <Row className="align-items-center">
                        <Col xs={9} md={10}>{props.date}</Col>
                        <Col md={2}>
                            <DropdownButton
                                id="dropdown-button-dark-example2"
                                variant="light"
                                menuVariant="dark"
                                title={<Pen size={15} color='grey' />}
                                size="sm"
                                className="mt-2"
                            >
                                <Dropdown.Item onClick={onPress}>Edit</Dropdown.Item>
                                <Dropdown.Item onClick={() => {dispatch(deleteClientProjectPosts(props._id))}}>Delete</Dropdown.Item>
                            </DropdownButton>
                        </Col>
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


