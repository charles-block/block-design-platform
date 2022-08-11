import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRight } from 'react-bootstrap-icons';

import BathroomLooks from '../../../../images/bathroomLooks.png';

function CollectionAndLooks() {
    return (
        <Container>
            <div>
                <h2>
                    Collection And Looks
                </h2>
                <div>
                    <Badge bg="secondary">In Progress</Badge>{' '}
                    <Badge bg="warning">Top Priority</Badge>{' '}
                </div><br />
                <div style={{
                    backgroundImage: `url(${BathroomLooks})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '60vw',
                    height: '60vh'
                }} />
                <br />
                <ListGroup>
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/HOsW9IkKKeNM7oLKOztYIC/Collection-Matrix?node-id=675%3A217&scaling=contain&page-id=642%3A90">Crash Course  <ArrowRight /></ListGroup.Item></ListGroup>
            </div>
        </Container>
    );
}

export default CollectionAndLooks;