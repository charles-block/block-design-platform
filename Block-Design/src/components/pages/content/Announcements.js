import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Plus } from 'react-bootstrap-icons';

import Spinner from 'react-bootstrap/Spinner';

import parse from 'html-react-parser';

//retrieve data from global redux store
import { useSelector } from 'react-redux';
import AnnouncementForm from '../../Form/AnnouncementForm';
import AnnouncementCard from '../../BlockCard/AnnouncementCard';

function Announcements() {
  
  const [currentId, setCurrentId] = useState(null);
  const posts = useSelector((state) => state.posts); //access to whole global redux store. Check combineReducers -> posts.

  // posts.sort().reverse()

  //console.log(posts);

  //Modal
  const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  const handleCloseHandler = () => {
    setShow(false);
    setCurrentId(null);
  }
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col xs={12} md={11}>
          <h2>
            Announcements
          </h2>
        </Col>
        <Col>
        <Button variant='dark' onClick={handleShow} ><Plus size={20} color='white' /></Button>
        </Col>
      </Row>
      <div style={{ overflow: 'scroll', height: '84vh' }}>
        {show ?
          <Modal size="lg" centered show={show} onHide={handleCloseHandler}>
            <Modal.Header closeButton>
              <Modal.Title>{currentId ? 'Edit' : 'Add'} an announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AnnouncementForm
                currentId={currentId}
                setCurrentId={setCurrentId}
                setShow={setShow}
              />
            </Modal.Body>
          </Modal>
          : <h1></h1>}
        <br />
        <Row xs={1} md={3} lg={3} className="g-2">
          {posts.map((post) => (
            <AnnouncementCard
              _id={post._id}
              title={post.title}
              name={post.name}
              content={parse(post.content)}
              createdAt={post.createdAt}
              link={post.link}
              setCurrentId={setCurrentId}
              setShow={setShow}
            />
          ))}</Row>
      </div>
    </Container>
  );
}

{/* <Row xs={1} md={3} lg={3} className="g-2">
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

                    ))} */}

export default Announcements;



// return (
//   !posts.length ? <Spinner animation="border" /> : (
//     <Container>
//       <h2>
//         Announcements
//       </h2>
//       <br />
//       <div style={{ overflow: 'scroll', height: '78vh' }}>
//         <Stack gap={4}>
//           {/* Form ------------------------------------------------------------------ */}
//           <div>
//             <AnnouncementForm />
//           </div>
//           {/* Cards ------------------------------------------------------------------ */}
//           <div>
//             <Card border="dark" >
//               <Card.Header>Design Bi-Weekly</Card.Header>
//               <Card.Body>
//                 <Card.Title><b>07/26/2022</b></Card.Title>
//                 <Card.Text>
//                   Agenda <br />
//                   <ul>
//                     <li>Revit Project File Name Updates</li>
//                     <li>BM Revit File Submission</li>
//                     <li>Family Requests via Slack* or Precog</li>
//                     <li>BIM Star of the Month: Danny Lin</li>
//                   </ul>
//                   Design Delivery <br />
//                   <ul>
//                     <li>Design Kick Off Call Revamp</li>
//                     <li>Check your floating shelves (Brackets & blocking)</li>
//                     <li>Keep internal pricing itemization internal</li>
//                     <li>Once BMs are completed, upload them to the BM Redline Doc and submit the QA Review Submission form
//                     </li>
//                     <li>Please include BM Checklist with BM for redlining</li>
//                     <li>NYC Shower Heads: Code Compliance Max 2.0pgm at 80psi
//                     </li>
//                   </ul>

//                 </Card.Text>
//                 <Button target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1VtQk08buOV8AIM4QQBO4fS7w3LhZ51VTmFiAW5EJuvA/edit#slide=id.g12620a6d26a_0_11" variant="dark">Link to Presentation</Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card border="dark" >
//               <Card.Header>Design Bi-Weekly</Card.Header>
//               <Card.Body>
//                 <Card.Title><b>07/12/2022</b></Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional content.
//                 </Card.Text>
//                 <Button variant="dark">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card border="dark" >
//               <Card.Header>Design Bi-Weekly</Card.Header>
//               <Card.Body>
//                 <Card.Title><b>06/28/2022</b></Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional content.
//                 </Card.Text>
//                 <Button variant="dark">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card border="dark" >
//               <Card.Header>Design Bi-Weekly</Card.Header>
//               <Card.Body>
//                 <Card.Title><b>06/14/2022</b></Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional content.
//                 </Card.Text>
//                 <Button variant="dark">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card border="dark" >
//               <Card.Header>Design Bi-Weekly</Card.Header>
//               <Card.Body>
//                 <Card.Title><b>05/30/2022</b></Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional content.
//                 </Card.Text>
//                 <Button variant="dark">Go somewhere</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         </Stack>
//       </div>
//     </Container>
//   )
// );
