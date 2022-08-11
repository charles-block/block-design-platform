import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';

function KitchenTwo() {
    return (
        <Container>
            <div>
                <h2>
                    Kitchen 2.0
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

export default KitchenTwo;