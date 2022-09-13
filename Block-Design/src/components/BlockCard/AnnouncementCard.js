import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import moment from 'moment';

import { useDispatch } from 'react-redux';

import { deletePost } from '../../actions/posts';

import { Pen, ThreeDotsVertical } from 'react-bootstrap-icons';

//() => setCurrentId(props._id)
//md={{ span: 1, offset: 1 }}

const AnnouncementCard = (props) => {

    const dispatch = useDispatch();

    const onPress = () => {
        props.setShow('true');
        props.setCurrentId(props._id);
    }

    return (
        <div>
            <Card border="secondary" key={props._id} >
                <Card.Header>
                    <Row className="align-items-center">
                        <Col xs={9} md={10}>Design Bi-Weekly</Col>

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
                                <Dropdown.Item onClick={() => dispatch(deletePost(props._id))}>Delete</Dropdown.Item>
                            </DropdownButton>
                            {/* <Button
                                size="sm"
                                variant="light"
                                onClick={onPress}>
                                <Pen size={15} color='grey' />
                            </Button> */}
                        </Col>


                       
                            {/* <Col md={2}><Button
                            size="sm"
                            variant="light"
                            onClick={onPress}>
                            <ThreeDotsVertical size={15} color='grey' />
                        </Button>
                        </Col> */}
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
                        variant="light"
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