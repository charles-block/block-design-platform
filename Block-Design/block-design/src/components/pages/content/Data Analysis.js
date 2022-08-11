import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';

function DataAnalysis() {
    return (
        <Container>
            <div>
                <h2>
                    Data Analysis
                </h2>
                <div>
                    <Badge bg="secondary">In Progress</Badge>{' '}
                    <Badge bg="warning">Medium Priority</Badge>{' '}
                </div>
                <br />
                <h6>This page is under construction.</h6>
            </div>
        </Container>
    );
}

export default DataAnalysis;