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
            {/* <Spline scene="https://prod.spline.design/z-B8F6DibL0JmRo7/scene.splinecode" /> */}
            </div>
            {/* <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} /> */}
        </>
    )
};

export default Home;


