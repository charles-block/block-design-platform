import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import background from '../../images/block-design-background.png';


import Spline from '@splinetool/react-spline';

function Home() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);
    return (
        <>
            <div style={{height: '100vh'}} >
            <Spline scene="https://prod.spline.design/ogoKKwI560Fpjc6Q/scene.splinecode" />
            </div>
        </>
    )
};

export default Home;


