import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { createPost, updatePost } from '../../actions/posts';



const AnnouncementForm = ({ currentId, setCurrentId }) => {


    const [postData, setPostData] = useState({
        title: '',
        name: '',
        content: '',
        link: ''
    });

    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);
    //callback function, dependency array: under what changes would this function run

    const handleQuillEdit = (value) => {
        setPostData((postData) => {
            return {
                ...postData,
                content: value
            }
        })
    }

    const handleSubmit = (e) => {

        //prevent refresh in browser
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        //clears form after submission
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
                <ReactQuill
                    theme="snow"
                    placeholder={"Start posting something"}
                    value={postData.content}
                    // onChange={(e) => setPostData({ ...postData, content: e })} 
                    onChange={handleQuillEdit}
                />
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
