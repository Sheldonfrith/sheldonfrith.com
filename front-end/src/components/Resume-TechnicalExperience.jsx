import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import styled from 'styled-components';

export default function TechnicalExperience(props) {

return (
<div className="technicalExperience" label="Technical Experience">
    <h3>Web-App and Public Web API</h3>
    <h4><a href="https://theplacefor.me">ThePlaceFor.Me</a></h4>
    <h5>October 2020- present</h5>
    <ul>
        <li>Backend public API built with Laravel connected to a MySQL database.</li>
        <li>Frontend React web-app built with styled-components, hooks and functional components.</li>
        <li>Solo project, built from scratch for fun.</li>
    </ul>
    <h3>Responsive Website</h3>
    <h4><a href="https://sheldonfrith.com">SheldonFrith.com</a></h4>
    <h5>October 2020 - present</h5>
    <ul>
        <li>React based website based on a designer’s mock-up, built with styled components, hooks, etc.</li>
        <li>Solo project, except the graphic design.</li>
    </ul>
    <h3>Architecture and Business Logic</h3>
    <h4><a href="https://sharpar.io/">Sharp AR</a></h4>
    <h5>September 2020</h5>
    <ul>
        <li>Dashboard with React, analytics with JS, serverless Node functions, Firebase database</li>
        <li>Solo project, for client. See Work History for more details.</li>
    </ul>
    <h3>Web-App</h3>
    <h4><a href="https://t-y-p-e.com">T-Y-P-E.com</a></h4>
    <h5>May 2020 - June 2020</h5>
    <ul>
        <li>My first React project. Demo of a hopefully soon-to-be-built full typing app.</li>
        <li>Solo learning project</li>
    </ul>
</div>
);
}
