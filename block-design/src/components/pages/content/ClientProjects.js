import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import AnnouncementForm from '../../Form/AnnouncementForm';

import background from '../../../images/block-design-background.png';

function ClientProjects() {

    const [postProjects, setPostProjects] = useState(false);


    return (
        <Container>
            <Row>
                <Col xs={12} md={10}>
                    <h2>
                        Client Projects
                    </h2>
                </Col>
                <Col>
                    {!postProjects ?
                        <Button variant='dark' onClick={() => setPostProjects(true)} >Add</Button> :
                        <Button variant='dark' onClick={() => setPostProjects(false)} >Cancel</Button>}
                </Col>
            </Row>
            <br />
            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
            {postProjects ? <AnnouncementForm /> : <h1></h1>}
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col>
                            <Card border="dark" >
                                <Card.Img variant="top" src={background} />
                                <Card.Body>
                                    <Card.Title>Designer Name</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default ClientProjects;