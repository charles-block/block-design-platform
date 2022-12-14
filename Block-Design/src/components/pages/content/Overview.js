import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { Link } from 'react-router-dom';


import { BarChart, CameraVideo, Command, FileEarmarkBinary, InputCursorText, Map, Megaphone, Person } from 'react-bootstrap-icons';


function Overview() {
    return (
        <Container>
            <h2>
                Overview
            </h2><br />
            {/* Row 1 ----------------------------------------------------------------------------*/}
            <Row xs={1} className="mb-3">
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }} >
                        <Card.Header>Announcements</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh',
                        }}>
                            <Link to="/docs/announcements">
                                <br />
                                <Megaphone size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Client Projects</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/client-projects">
                                <br />
                                <Person size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Design Standards</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/design-standards">
                                <br />
                                <FileEarmarkBinary size={40} color='black' />{''}
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Design Tools</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/design-tools">
                                <br />
                                <Command size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {/* Row 2 ----------------------------------------------------------------------------*/}
            <Row xs={1} className="mb-3">
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Initiatives</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/initiatives/collection-and-looks">
                                <br />
                                <Map size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Revit Topics</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/revit-topics">
                                <br />
                                <CameraVideo size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Data Analysis</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/data-analysis">
                                <br />
                                <BarChart size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card border="dark" style={{ width: '16rem' }}>
                        <Card.Header>Survey and Forms</Card.Header>
                        <Card.Body style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15vh'
                        }}>
                            <Link to="/docs/survey-and-forms">
                                <br />
                                <InputCursorText size={40} color='black' />
                                <br />
                                <br />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Overview;