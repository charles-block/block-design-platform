import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


import 'react-pro-sidebar/dist/css/styles.css';

function LeftNavBar() {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem>Overview<Link to="overview" /></MenuItem>
                <MenuItem>Announcements<Link to="announcements" /></MenuItem>
                <MenuItem>Current Client Projects<Link to="current-client-projects" /></MenuItem>
                <MenuItem>Design Standards<Link to="design-standards" /></MenuItem>
                <MenuItem>Design Tools<Link to="design-tools" /></MenuItem>
                <MenuItem>Surveys and Forms<Link to="survey-and-forms" /></MenuItem>
                <SubMenu title="Initiatives">
                    <MenuItem>Collections + Looks<Link to="initiatives/collection-and-looks" /></MenuItem>
                    <MenuItem>Configurator<Link to="initiatives/configurator" /></MenuItem>
                    <MenuItem>Kitchen 2.0<Link to="initiatives/kitchen2.0" /></MenuItem>
                </SubMenu>
                <SubMenu title="BIM ">
                    <MenuItem>Revit Topics<Link to="revit-topics" /></MenuItem>
                    <MenuItem>Revit Tutorial<Link to="revit-tutorial" /></MenuItem>
                </SubMenu>
                <MenuItem>Data Analysis<Link to="data-analysis" /></MenuItem>
            </Menu>
        </ProSidebar>
    )
};

export default LeftNavBar;