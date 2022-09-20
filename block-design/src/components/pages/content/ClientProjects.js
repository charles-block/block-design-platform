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

    const [currentId, setCurrentId] = useState(null);

    const clientProjectPosts = useSelector((state) => state.clientProjectPosts);

    clientProjectPosts.sort().reverse()
    // console.log(clientProjectPosts);

    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);

    const handleCloseHandler = () => {
        setShow(false);
        setCurrentId(null);
      }
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
                </Col>
            </Row>

            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
                {show ?
                    <Modal size="lg" centered show={show} onHide={handleCloseHandler}>
                        <Modal.Header closeButton>
                            <Modal.Title>{currentId ? 'Edit' : 'Add'} a client project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ClientProjectForm
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                                setShow={setShow}
                            />
                        </Modal.Body>
                    </Modal> : <h1></h1>}
                <br />
                <Row xs={1} md={3} lg={3} className="g-2">
                    {clientProjectPosts.map((post) => (
                        <ClientProjectCard
                            _id={post._id}
                            title={post.title}
                            designerName={post.designerName}
                            clientName={post.clientName}
                            content={parse(post.content)}
                            date={post.date}
                            selectedFile={post.selectedFile}
                            setCurrentId={setCurrentId}
                            setShow={setShow}
                        />
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default ClientProjects;