import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

import { Pen } from 'react-bootstrap-icons';

//() => setCurrentId(props._id)

const AnnouncementCard = (props, { setCurrentId, setShow }) => {

    const onPress = () => {
        props.setShow('true');
        props.setCurrentId(props._id);
    }

    return (
        <div>
            <Card border="secondary" key={props._id} > 
                <Card.Header>
                    <Row>
                        <Col xs={9} md={8}>Design Bi-Weekly</Col>
                        <Col md={{ span: 1, offset: 2 }}>
                            <Button
                                size="sm"
                                variant="light"
                                onClick={onPress}> 
                                <Pen size={15} color='grey' />
                            </Button>
                        </Col> 
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.name}</Card.Text>
                    <Card.Text>{props.content}</Card.Text>
                    {/* <Card.Text>{moment(props.createdAt).fromNow()}</Card.Text> */}
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.link}
                        variant="secondary"
                    >
                        Link to presentation
                    </Button>
                    <br />
                    {/* <Button
                        variant="light"
                        onClick={() => 
                            // setCurrentId(props.key);
                            console.log(props.key)
                        }
                    >
                        Edit Announcement
                    </Button> */}
                </Card.Body>
            </Card>
            <br />
        </div>

    )
}


export default AnnouncementCard;


{/* <Card.Text>
    {moment(post.content).fromNow()}
</Card.Text> */}