import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRight } from 'react-bootstrap-icons';

function DesignStandards() {
    return (
        <Container>
            <h2>
                Design Standards
            </h2><br />
            <h4>Revit Template</h4>
            <ListGroup>
                <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1wlvGBePcfwpaxEAiNTd5Eex7i1lkr-06">Revit Template V1.7.1 <ArrowRight /></ListGroup.Item>
            </ListGroup>
            <br />
            <h4>Detail Library</h4>
            <ListGroup>
                <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/u/1/folders/1s-eG6wW0VzKnTd4W0bn425pq50h8URA6">Build Manual Detail Library <ArrowRight /></ListGroup.Item>
            </ListGroup>
            <br />
            <h4>Design Standards Guide</h4>
            <ListGroup>
                <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rf4QNf0xQLBi_S1vujGdeXEivuT4GBYP/view?usp=sharing">Bathroom Guide (PDF) <ArrowRight /></ListGroup.Item>
                <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1tds1_WlvfUt8E5JCCCi5KaTN98w5T-9O/view?usp=sharing">Kitchen Guide (PDF) <ArrowRight /></ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default DesignStandards;