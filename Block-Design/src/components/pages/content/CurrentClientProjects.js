import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';

import background from '../../../images/block-design-background.png';

function CurrentClientProjects() {
    return (
        <Container>
            <h2>
                Current Client Projects
            </h2>
            <br />
            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
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

export default CurrentClientProjects;