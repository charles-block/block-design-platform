import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

function RevitTopics() {
    return (
        <Container>
            <h2>
                Revit Topics
            </h2>
            {/* <div>
                <Badge bg="secondary">Last updated 07/27/2022</Badge>{' '}
            </div> */}
            <br />
            <div style={{ overflow: 'scroll', height: '78vh' }}>
                <Stack gap={4}>
                    <div>
                        <Card border="dark">
                            <Card.Header>Revit Topics</Card.Header>
                            <Card.Body>
                                <Card.Title>07/26/2022</Card.Title>
                                <Card.Text>
                                    BIM Support: Sections, Levels, Grids & Dims <br /> <br />
                                    Today during our office hours we are going to model a super basic work from backyard office. During the meeting today we will cover <b>sections, levels, grids and dimensions. </b>
                                    Come prepared with revit open but no project created yet. We are going to start from scratch and only use revit out of the box for this project.<br /><br />
                                    You can find the project files, video and the time stamp shortcut file in the link below.
                                </Card.Text>
                                <Button target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1V6Cc55gZYBaLVcpnsy4GznFWl0Kf7bFp?usp=sharing" variant="dark">Link to video</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <Card border="dark">
                            <Card.Header>Revit Topics</Card.Header>
                            <Card.Body>
                                <Card.Title>07/13/2022</Card.Title>
                                <Card.Text>
                                    BIM Support: Tackling questions <br /> <br />
                                    In today's office hours I'll be going through these questions and offer solutions: <br />
                                    <ul>
                                        <li>
                                            Does anyone know how I can fix my tags so they appear in alphabetical order?
                                        </li>
                                        <li>
                                            Does anyone know a very quick way to add materials that are missing from an EC model that was created using an older Block template?
                                        </li>
                                        <li>
                                            In the new template, the baseboard widths are wider than before and I'm not sure how to convert it back to the original thickness. Any solutions here?
                                        </li>
                                        <li>
                                            Wondering what stacked cabinetry family should be used so that it reflects well in cabinet schedules? I've been stacking individual cabinet families to create the look I need but I know proper dimensions will not reflect in schedules..
                                        </li>
                                        <li>
                                            This is a little silly but is there any chance the txt for all BM, SALV, and EX annotations can be scaled down in the template?
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button href="https://viatechnik.box.com/s/dlfwhuwbga7y94j0evpq88eb6mgh8krx" variant="dark">/Link to video/</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Stack>
            </div>
        </Container>
    );
}

export default RevitTopics;