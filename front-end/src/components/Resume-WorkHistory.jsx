import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
import styled from 'styled-components';

export default function WorkHistory(props) {

return (
<div
            className="workHistory"
            label="Work History"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderWidth: "0 0 0 0",
                borderStyle: "solid",
                paddingLeft: "2vmin",
                margin: "1vmin 0",
              }}
            >
              <div>
                <h3>Full-Stack Web Developer</h3>
                <p style={{ margin: 0 }}>Freelancer</p>
                <p style={{margin:0}}>Sharp AR</p>
              <ul>
                  <li>Created custom analytics tracking service and a secure dashboard for viewing the analytics, built
with React, implements Firebase Auth, connects to DB with Firebase serverless functions</li>
                <li>Setup basic software architecture including business admin dashboard, database setup, user
accounts and security, basic documentation, version control with GitHub, etc.</li>
                <li>Created JS + JQuery script for inserting Augmented Reality models into client websites</li>
              </ul>
              </div>
              <p style={{ fontSize: "100%" }}>September 2020 - present</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderWidth: "0 0 0 0",
                borderStyle: "solid",
                paddingLeft: "2vmin",
                margin: "1vmin 0",
              }}
            >
              <div>
                <h3>Freelance Website Builder</h3>
                <p style={{ margin: 0 }}>Self-Employed</p>
              <ul>
                  <li>Create simple wordpress websites for businesses</li>
              </ul>
              </div>
              <p style={{ fontSize: "100%" }}>2016 - present</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderWidth: "0 0 0 0",
                borderStyle: "solid",
                paddingLeft: "2vmin",
                margin: "1vmin 0",
              }}
            >
              <div>
                <h3>Owner - Organic Farm</h3>
                <p style={{ margin: 0 }}>Fazenda Meats and Wandering Farm</p>
              </div>
              <p>2019 - 2020</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderWidth: "0 0 0 0",
                borderStyle: "solid",
                paddingLeft: "2vmin",
                margin: "1vmin 0",
              }}
            >
              <div>
                <h3>Construction</h3>
                <p style={{ margin: 0 }}>Front Desk Ltd.</p>
              </div>
              <p>May 2019 - August 2020</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderWidth: "0 0 0 0",
                borderStyle: "solid",
                paddingLeft: "2vmin",
                margin: "1vmin 0",
              }}
            >
              <div>
                <h3>Holistic Management Supervisor</h3>
                <p style={{ margin: 0 }}>
                  Northern Farm Training Institute
                </p>
              </div>
              <p>May 2016 - October 2017</p>
            </div>
          </div>
);
}
