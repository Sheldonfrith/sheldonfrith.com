import React, { useState, useEffect, useContext } from "react";
import Accordian from "./reusable/Accordian";
import styled from 'styled-components';
import SoftSkills from './Resume-SoftSkills';
import TechnicalExperience from './Resume-TechnicalExperience';
import WorkHistory from './Resume-WorkHistory';
import Languages from './Resume-Languages';


const Container = styled.div`
  margin: 1rem;
`;


export default function Resume(props) {
  return (
      <Container>
        <Accordian initialOpenSectionNames={['technicalExperience']}>
          <div className="technicalExperience" label="Technical Experience">
          <TechnicalExperience/>
          </div>
          <div className="softSkills" label="Soft Skills">

          <SoftSkills/>
          </div>
          <div className="workHistory" label="Work History">

          <WorkHistory/>
          </div>
          <div className="languages" label="Languages and Technologies">
          <Languages/>

          </div>
          <div className="references" label="References">
            <h2 style={{ textAlign: "center" }}>
              References Available Upon Request
            </h2>
          </div>
        </Accordian>
        </Container>
  );
}
