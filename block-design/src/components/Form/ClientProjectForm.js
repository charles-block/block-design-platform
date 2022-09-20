import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { createClientProjectPosts, updateClientProjectPosts } from '../../actions/clientProjectPosts';
import FileBase from 'react-file-base64';


const ClientProjectForm = (props) => {


    const [clientProjectData, setClientProjectData] = useState({
        title: '',
        designerName: '',
        clientName: '',
        content: '',
        date: '',
        selectedFile: ''
    });

    const post = useSelector((state) => props.currentId ? state.clientProjectPosts.find((clientProjectPost) => clientProjectPost._id === props.currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setClientProjectData(post);
    }, [post]);

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

        console.log(props.currentId);

        if (props.currentId) {
            dispatch(updateClientProjectPosts(props.currentId, clientProjectData));
        } else {
            dispatch(createClientProjectPosts(clientProjectData));
        }

        props.setShow(false);
        props.setCurrentId(null);

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
                <Form.Label>Designer</Form.Label>
                <Form.Control
                    placeholder="Enter your name"
                    type="text"
                    value={clientProjectData.designerName}
                    onChange={(e) => setClientProjectData({ ...clientProjectData, designerName: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Client</Form.Label>
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
                onDone={({ base64 }) => setClientProjectData({ ...clientProjectData, selectedFile: base64 })}
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
