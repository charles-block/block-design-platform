import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { ArrowRight } from 'react-bootstrap-icons';

function SurveyAndForms() {
    return (
        <Container>
            <h2>
                Survey & Forms
            </h2><br />
            <div style={{ overflowY: 'scroll', overflowX: 'hidden', height: '78vh' }}>
                <h4>DSE QA</h4>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfYSJFrIm_RJwcboPxR_dA2Iqq6PONbTVWcqkEqvI7Zl2tM4g/viewform"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Scope Engine QA Review - Submission <ArrowRight /></div>
                            Submit all finalized scope engines for QA review prior to sharing with clients.
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1eKfQBYcyDWp2XIzvaU_Kx2YXq6NWk2WcbIi_AXZ7C7c/edit#gid=1659210340"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">DSE QA Checklist Template <ArrowRight /></div>
                            Please make a copy of this file and complete the checklist prior to submitting your DSE for QA.
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <br />
                <h4>Procurement</h4>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScbMRpbqIRypCEhibUMTe53HyL5jt024R22ySrMQwl8iHRiRQ/viewform"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Material Substitution Request Form <ArrowRight /></div>
                            All submissions are reviewed daily at 5:30PM ET. Submissions will then be added to the Digital Catalog within 1 business day of approval.
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdPQNgG0_QxUcG8i7t1Sfilbzzb4TRH8ngxpWYgGOZQd_KfjA/viewform"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Procurement Requests <ArrowRight /></div>
                            Submit any requests for materials changes following design sign-off.
                        </div>
                    </ListGroup.Item>

                </ListGroup>
                <br />
               
               

                <h4>Pricing</h4>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSczmkwdgkNS6mcyFbCtfcvbuSAGMyD-0N74BKckQPXTJHsqnw/viewform"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Custom Quote Requests <ArrowRight /></div>
                            Request price quotes for all custom fabricated materials (Group 3 Cabinets, Countertops, Glass).
                        </div>

                    </ListGroup.Item>
                </ListGroup>
                <ListGroup as="ol">
                    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeQE5_LFiV1scGhPMFhgTD_VJ-2jhExlaWN2s-87h5W6F-Icw/viewform"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Special Conditions Pricing <ArrowRight /></div>
                            Special Condition Pricing Tool.
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container >
    );
}

export default SurveyAndForms;


{/* <h4>Detail Update Requests</h4>
<ListGroup as="ol">
    <ListGroup.Item action target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScg_AyGOz0x3YuQHufyH9gbKpx1P_EPWMXV1jJxrWfTqfnrnw/viewform"
        className="d-flex justify-content-between align-items-start"
    >
        <div className="ms-2 me-auto">
            <div className="fw-bold">DSE Catalog and Design Details Update Requests <ArrowRight /></div>
            Update catalog and design details.
        </div>
    </ListGroup.Item>
</ListGroup>
<br /> */}