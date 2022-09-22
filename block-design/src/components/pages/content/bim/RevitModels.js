import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRight } from 'react-bootstrap-icons';

function RevitModels() {
    return (
        <Container>
            <h2>
                Revit Models
            </h2><br />
            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
            <h4>Familiy Sandbox</h4>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/19z8AY_N1oQ57GqDMPX2Ag6ZC2KuF9C4b"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Viatechnik Models <ArrowRight /></div>
                        Families created and updated by Viatechnik.
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <br />
                <h4>Revit Families Creation Request</h4>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://vdcprecogs.com/project/block-renovation-revit-families-creation-support/issues"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Precog <ArrowRight /></div>
                        Request creation of new families here.
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    );
}

export default RevitModels;

