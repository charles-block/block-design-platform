import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';

function Configurator() {
    return (
        <Container>
            <div>
                <h2>
                    Configurator
                </h2>
                <div>
                    <Badge bg="secondary">In Progress</Badge>{' '}
                    <Badge bg="warning">Top Priority</Badge>{' '}
                </div>
                <br />
                <h6>Activate this page with a magic spell. Expecto Patronum!</h6>
            </div>
        </Container>
    );
}

export default Configurator;