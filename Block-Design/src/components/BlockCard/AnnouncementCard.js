import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const AnnouncementCard = (props, {setCurrentId}) => {
    return (
        <div>
            <Card border="secondary"  >
                <Card.Header>Design Bi-Weekly</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.name}</Card.Text>
                    <Card.Text>{props.content}</Card.Text>
                    {/* <Card.Text>{moment(props.createdAt).fromNow()}</Card.Text> */}
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.link}
                        variant="dark"
                    >
                        Link to presentation
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="light"
                        onClick={() => 
                            // setCurrentId(props.key);
                            console.log(props.key)
                        }
                    >
                        Edit Announcement
                    </Button>
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