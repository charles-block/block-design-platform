import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import FileBase from 'react-file-base64';

import { createClientProjectPosts } from '../../actions/clientProjectPosts';

const ClientProjectForm = () => {


    const [clientProjectData, setClientProjectData] = useState({
        title: '',
        designerName: '',
        clientName: '',
        content: '',
        date: '',
        selectedFile: ''
    });


    const dispatch = useDispatch();


    const handleQuillEdit = (value) => {
        setClientProjectData((clientProjectData) => {
            return {
                ...clientProjectData,
                content: value
            }
        })
    }

    const handleSubmit = (e) => {

        //prevent refresh in browser
        e.preventDefault();

        dispatch(createClientProjectPosts(clientProjectData));

        //clears form after submission
        setClientProjectData({
            title: '',
            designerName: '',
            clientName: '',
            content: '',
            date: '',
            selectedFile: ''
        });
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    placeholder="Enter title"
                    type="text"
                    value={clientProjectData.title}
                    //...postData: only overriding title, not other fields.
                    onChange={(e) => setClientProjectData({ ...clientProjectData, title: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designer Name</Form.Label>
                <Form.Control
                    placeholder="Enter your name"
                    type="text"
                    value={clientProjectData.designerName}
                    onChange={(e) => setClientProjectData({ ...clientProjectData, designerName: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                    placeholder="Enter your name"
                    type="text"
                    value={clientProjectData.clientName}
                    onChange={(e) => setClientProjectData({ ...clientProjectData, clientName: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <ReactQuill
                    theme="snow"
                    placeholder={"Start posting something"}
                    value={clientProjectData.content}
                    onChange={handleQuillEdit}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    placeholder="Add Date"
                    type="text"
                    value={clientProjectData.date}
                    onChange={(e) => setClientProjectData({ ...clientProjectData, date: e.target.value })}
                />
            </Form.Group>

            <FileBase 
                type="file"
                multiple={false}
                onDone={({base64}) => setClientProjectData({ ...clientProjectData, selectedFile: base64 })}
            />

            <br />
            <br />

            <Button variant="dark" type="submit" onClick={handleSubmit} >
                Submit
            </Button>
            <br />
            <br />
            <hr />
        </Form>

    );
}

export default ClientProjectForm;
