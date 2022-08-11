

import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';


function RevitTutorial() {
    return (
        <Container>
            <h2>
                Revit Tutorial
            </h2>
            {/* <div>
                <Badge bg="secondary">Last updated 07/27/2022</Badge>{' '}
            </div> */}
            <br />
            <div style={{ overflow: 'scroll', height: '78vh' }}>
                <Stack gap={4}>
                    <div>
                        <Card border="dark">
                            <Card.Header>Revit Tutorial</Card.Header>
                            <Card.Body>
                                <Card.Title>05/23/2022</Card.Title>
                                <Card.Text>
                                    Revit Template V1.71 Tutorial <br /><br />
                                </Card.Text>
                                <iframe src="https://www.loom.com/embed/374e44e62e254429b31d17de08433e78" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ width: '100%', height: "50vh" }}></iframe>
                                <br /><br />
                                <Card.Text>
                                    Timestamp and Breakdown <br /><br />
                                    <ol>
                                        <li>
                                            <b> 0:36 - Collections + Looks Model Groups </b>
                                            <ul>
                                                <li>Where to find C+L Model Groups in the template</li>
                                                <li>How to use C+L groups</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <b>2:45 - Phasing + Prepare for Replacing Fixtures</b>
                                            <ul>
                                                <li>Understanding Demo vs. New Construction Phase</li>
                                                <li>How to use Phase Filters</li>
                                                <li>How to prep phase filter/phasing to replace fixtures in place</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <b>6:19 - Replace Fixtures</b>
                                            <ul>
                                                <li>How to use Match Type Properties (MA)</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <b>8:02 - Materials</b>
                                            <ul>
                                                <li>How to use C+L groups with Paint + Split Face Tool</li>
                                                <li>How to apply material by copying the wall/floor finish within C+L Model Group </li>
                                                <li>How to use Join Function and Split + Match Properties </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <b>14:04 - Metal Trim (Schluter Strip) and Baseboard</b>
                                            <ul>
                                                <li>How to use Create Similar (CS), Pick line to from C+L Model Group to apply trim/baseboard</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <b>18:35 - Schedules</b>
                                            <ul>
                                                <li>All C+L components have accurate scheduling information baked into them! Designers only need to confirm tag numbers :1234: (e.g. all instances of PT-01 now show up in the schedules page)</li>
                                                <li>All columns in the schedules are directly editable within the schedule! (old flow: edit info within each component)</li>
                                                <li>Trims are now schedules! (goodbye manual description editing! -- grouts/caulk information still need to be included)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <b>One more important update (not mentioned in the tutorial):</b> <br />
                                    We've updated the template to include the QSG MILESTONES so you don't have to worry about adding in those PDF files! <br /><br />
                                    Last updated by Charles and Lianne
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <div>
                        <Card border="dark">
                            <Card.Header>Revit Topics</Card.Header>
                            <Card.Body>
                                <Card.Title>07/19/2022</Card.Title>
                                <Card.Text>
                                    BIM Support: Parametric Table & Desk <br /> <br />
                                    I will be showing how to make a simple parametric table and desk. We are going to walk through <b>creating a parameter and adding a material parameter.</b> We will also discuss the difference between <b>an instance and type parameter.</b>
                                </Card.Text>
                                <Button href="https://viatechnik.box.com/s/dlfwhuwbga7y94j0evpq88eb6mgh8krx" variant="dark">Link to video</Button>
                            </Card.Body>
                        </Card>
                    </div> */}

                </Stack>
            </div>
        </Container>
    );
}

export default RevitTutorial;