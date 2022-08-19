import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { ArrowRight } from 'react-bootstrap-icons';

function DesignStandards() {
  return (
    <Container>
      <h2>
        Design Standards
      </h2><br />
      <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
        <h4>Designer Handbook</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FPHeHdftzsQJXPrHu4qeSSFJMfiyfKTOUTgPyAph7qE/edit#">
            Designer Handbook  <ArrowRight />
          </ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Build Manual Guidelines</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1BguIEsmtNXxrWJn0h5LXEYwEetObpIux/view?usp=sharing">Bathroom <ArrowRight /></ListGroup.Item>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1BzviPJ6Ap9YOFFsljdhmWgMwacW5aOIo/view?usp=sharing">Kitchen <ArrowRight /></ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Catalog</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://www.blockrenovation.com/catalog/bathroom">Block Digital Catalog <ArrowRight /></ListGroup.Item>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://www.blockrenovation.com/quiet-town/catalog">Block Quiet Town Catalog <ArrowRight /></ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Viatechnik Models</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1ZxsuVqMVYt9y9pucXLOVqFcW89zTsoD0">Viatechnik Revit Models <ArrowRight /></ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Retool</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://retool.blockrenovation.com/">Retool <ArrowRight /></ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Zoning & Building Codes</h4>
        <ListGroup>
          <ListGroup.Item action target="_blank" rel="noopener noreferrer">Building Codes + Zoning (Coming soon) <ArrowRight /></ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
}

export default DesignStandards;