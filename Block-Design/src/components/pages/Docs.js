import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LeftNavBar from '../../navigation/LeftNavBar';
import CurrentClientProjects from './content/CurrentClientProjects';
import Announcements from './content/Announcements';
import DesignStandards from './content/DesignStandards';
import Overview from './content/Overview';
import DesignTools from './content/DesignTools';
import RevitTopics from './content/bim/RevitTopics';
import RevitTutorial from './content/bim/RevitTutorial';
import DataAnalysis from './content/Data Analysis';
import SurveyAndForms from './content/SurveyAndForms';
import CollectionAndLooks from './content/initiatives/CollectionAndLooks';
import Configurator from './content/initiatives/Configurator';
import KitchenTwo from './content/initiatives/KitchenTwo';

import { Route, Routes } from 'react-router-dom';

function Docs() {
    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col sm={3}><LeftNavBar /></Col>
                    <Col sm={9}>
                        <Routes>
                            <Route path="current-client-projects" element={<CurrentClientProjects />} />
                            <Route path="announcements" element={<Announcements />} />
                            <Route path="design-standards" element={<DesignStandards />} />
                            <Route path="/" element={<Overview />} />
                            <Route path="overview" element={<Overview />} />
                            <Route path="design-tools" element={<DesignTools />} />
                            <Route path="revit-topics" element={<RevitTopics /> } />
                            <Route path="revit-tutorial" element={<RevitTutorial /> } />
                            <Route path="data-analysis" element={<DataAnalysis />} />
                            <Route path="survey-and-forms" element={<SurveyAndForms />} />
                            <Route path="initiatives/collection-and-looks" element={<CollectionAndLooks />} />
                            <Route path="initiatives/configurator" element={<Configurator />} />
                            <Route path="initiatives/kitchen2.0" element={<KitchenTwo />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Docs;

//Nested route paths are now relative to parent route paths.