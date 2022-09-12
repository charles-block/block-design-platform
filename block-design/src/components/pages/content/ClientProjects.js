import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import parse from 'html-react-parser';
import Modal from 'react-bootstrap/Modal';

import { Plus } from 'react-bootstrap-icons';

import ClientProjectForm from '../../Form/ClientProjectForm';
import ClientProjectCard from '../../BlockCard/ClientProjectCard';

import background from '../../../images/block-design-background.png';

//retrieve data from global redux store
import { useSelector } from 'react-redux';

function ClientProjects() {

    const clientProjectPosts = useSelector((state) => state.clientProjectPosts);

    clientProjectPosts.sort().reverse()
    // console.log(clientProjectPosts);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [postProjects, setPostProjects] = useState(false);


    return (
        <Container>
            <Row>
                <Col xs={12} md={11}>
                    <h2>
                        Client Projects
                    </h2>
                </Col>
                <Col>
                <Button variant='dark' onClick={handleShow} ><Plus size={20} color='white' /></Button>
                    {/* {!postProjects ?
                        <Button variant='dark' onClick={() => setPostProjects(true)} >Add</Button> :
                        <Button variant='dark' onClick={() => setPostProjects(false)} >Cancel</Button>} */}
                </Col>
            </Row>

            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
                {show ?
                    <Modal size="lg" centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a client project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ClientProjectForm />
                        </Modal.Body>
                        </Modal> : <h1></h1>}
                        <br />
                        <Row xs={1} md={3} lg={3} className="g-2">
                            {clientProjectPosts.map((post) => (
                                <ClientProjectCard
                                    key={post._id}
                                    title={post.title}
                                    designerName={post.designerName}
                                    clientName={post.clientName}
                                    content={parse(post.content)}
                                    date={post.date}
                                    selectedFile={post.selectedFile}
                                />

                            ))}
                        </Row>
                    </div>
        </Container>
    );
}

export default ClientProjects;