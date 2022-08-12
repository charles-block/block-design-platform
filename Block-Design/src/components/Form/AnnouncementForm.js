import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { createPost } from '../../actions/posts';



const AnnouncementForm = () => {
    const [postData, setPostData] = useState({
        title: '',
        name: '',
        content: '',
        link: ''
    });

    const [contentValue, setContentValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault(); //prevent refresh in browser

        dispatch(createPost(postData));
        setPostData({
            title: '',
            name: '',
            content: '',
            link: ''
        });
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    placeholder="Enter title"
                    type="text"
                    value={postData.title}
                    //...postData: only overriding title, not other fields.
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="Enter your name"
                    type="text"
                    value={postData.name}
                    onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Add content here"
                    rows={3}
                    type="text"
                    value={postData.content}
                    onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                />
                {/* Adding ReactQuill */}
                {/* <ReactQuill theme="snow" value={contentValue} onChange={setContentValue} /> */}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Link to presentation</Form.Label>
                <Form.Control
                    placeholder="Add link to presentation"
                    type="text"
                    value={postData.link}
                    onChange={(e) => setPostData({ ...postData, link: e.target.value })}
                />
            </Form.Group>

            <Button variant="dark" type="submit" onClick={handleSubmit} >
                Submit
            </Button>

            <br />
            <br />
            <hr />
        </Form>

    );
}

export default AnnouncementForm;

