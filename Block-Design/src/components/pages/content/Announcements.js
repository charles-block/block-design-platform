import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import Spinner from 'react-bootstrap/Spinner';

//retrieve data from global redux store
import { useSelector } from 'react-redux';
import AnnouncementForm from '../../Form/AnnouncementForm';
import AnnouncementCard from '../../BlockCard/AnnouncementCard';

function Announcements() {
  const posts = useSelector((state) => state.posts); //access to whole global redux store. Check combineReducers -> posts.

  console.log(posts);
  
  const [postAnnouncement, setPostAnnouncement] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs={12} md={10}>
          <h2>
            Announcements
          </h2>
        </Col>
        <Col>
        {!postAnnouncement ? <Button variant='dark' onClick={() => setPostAnnouncement(true)} >Add</Button> : <h1></h1>}
        {postAnnouncement ? <Button variant='dark' onClick={() => setPostAnnouncement(false)} >Cancel</Button> : <h1></h1>}
        </Col>
      </Row>
      <div style={{ overflow: 'scroll', height: '78vh' }}>
        {postAnnouncement ? <AnnouncementForm /> : <h1></h1>}
        <br />
        {posts.map((post) => (
          <AnnouncementCard
            key={post._id}
            title={post.title}
            name={post.name}
            content={post.content}
            createdAt={post.createdAt}
            link={post.link}
          />
        ))}
      </div>
    </Container>
  );
}

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
