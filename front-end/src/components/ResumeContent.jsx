import React, { useState, useEffect, useContext } from "react";
import Accordian from "./reusable/Accordian";
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
`;


export default function Resume(props) {
  return (
      <Container>
        <Accordian initialOpenSectionNames={['workHistory']}>
          <div className="softSkills" label="Soft Skills">
            <h4>Self-motivated and hard-working</h4>
            <p>
              Those traits are necessary prerequisites for any farmer, and
              farming has been my primary occupation for many years. Please call
              my references if you have any doubts about my work ethic!
            </p>
            <h4>Open minded, comfortable in unfamiliar situations</h4>
            <p>
              I grew up in Brazil, and have lived in many places including BC,
              SK, NWT, and Ontario. I’ve traveled in Asia and through all the
              Americas (North, Central and South). I have friends all over the
              world, and have a basic understanding of Portuguese and Spanish
              (very rusty right now from dis-use).
            </p>
            <h4>Good communicator, mediator, and manager</h4>
            <p>
              I have lots of experience managing and training other workers at
              several different jobs (Front Desk Ltd, Northern Farm Training
              Institute, Buffalo Air Express, Fazenda Meats). I’ve taught adult
              learning courses, have experience with sales, and I’m always
              professional.
            </p>
            <h4>
              Mentally resilient and able to handle high stress situations
            </h4>
            <p>
              I’ve spent over 2 months continuously in silent meditation
              retreat. Tested myself in multiple wilderness survival situations
              lasting as long as a month. And I train martial arts and
              powerlifting regularly to keep my mind and body sharp.
            </p>
          </div>
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
                <h3>Freelance Web Developer</h3>
                <p style={{ margin: 0 }}>Full Stack Web Development</p>
                <p style={{margin:0}}>Sharp AR (contact for reference)</p>
              </div>
              <p style={{ fontSize: "100%" }}>September 2020 - Present</p>
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
                <h3>Front Desk Ltd</h3>
                <p style={{ margin: 0 }}>Construction</p>
              </div>
              <p style={{ fontSize: "100%" }}>Caledon ON, May 2019-Aug 2020</p>
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
                <h3>Fazenda Meats</h3>
                <p style={{ margin: 0 }}>Self-Employed Organic Goat Farmer</p>
              </div>
              <p>Caledon ON, 2020</p>
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
                <h3>Wandering Farm</h3>
                <p style={{ margin: 0 }}>Self-Employed Organic Veggie Farmer</p>
              </div>
              <p>Caledon ON, 2019</p>
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
                <h3>Buffalo Air Express</h3>
                <p style={{ margin: 0 }}>
                  Airplane Loading and Express Deliveries
                </p>
              </div>
              <p>Hay River NWT, Sep 2018 - April 2019</p>
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
                <h3>Northern Farm Training Institute</h3>
                <p style={{ margin: 0 }}>Livestock Manager and Educator</p>
              </div>
              <p>Hay River NWT, May 2016 - Oct 2017</p>
            </div>
            <div
              style={{
                borderStyle: "solid",
                padding: "2vmin",
                borderWidth: "0.2vmin",
                margin: "2vmin",
              }}
            >
              <h4>Book, Blog, and Wordpress Sites</h4>
              <p>2015 - present</p>
              <ul>
                <li>
                  Author of chapter in peer reviewed book,{" "}
                  <a
                    href="
              https://www.mqup.ca/green-meat--products-9780228001331.php"
                  >
                    'Green Meat?'
                  </a>
                  , published by McGill University
                </li>
                <li>
                  Self published e-book{" "}
                  <a href="https://www.amazon.ca/Letter-Vegetarian-Nation-Sustainable-Environmental-ebook/dp/B01BK3HKNA/ref=sr_1_1?dchild=1&keywords=letter+to+a+vegetarian+nation&qid=1598885580&sr=8-1">
                    ‘Letter To A Vegetarian Nation’
                  </a>
                </li>
                <li>
                  Successful blog, pulling in regular affiliate cheques years
                  after I finished writing it (currently offline, was at{" "}
                  <a href="http://regenerateland.com">regenerateland.com</a>)
                </li>
                <li>
                  Created and still host several basic wordpress websites (
                  <a href="http://b-cranch.ca">b-cranch.ca</a>,{" "}
                  <a href="http://holisticmanagement.ca">
                    holisticmanagement.ca
                  </a>
                  , <a href="http://fazendameats.com">fazendameats.com</a>,{" "}
                  <a href="http://nftinwt.com">nftinwt.com</a>, etc.)
                </li>
              </ul>
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
                <h3>B-C Ranch</h3>
                <p style={{ margin: 0 }}>
                  Apprentice Cowboy and Holistic Rancher
                </p>
              </div>
              <p>Meadow Lake SK, June 2015 - December 2015</p>
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
                <h3>Driftwood Landscaping</h3>
                <p style={{ margin: 0 }}>Landscaper</p>
              </div>
              <p>Victoria BC, November 2014 - June 2015</p>
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
                <h3>Makaria Farm</h3>
                <p style={{ margin: 0 }}>Greenhouse Manager</p>
              </div>
              <p>Duncan BC, May 2014 - October 2014</p>
            </div>
            <div>
              <h3>And more…</h3>
              <ul>
                <li>Organic Master Gardener Certificate, Gaia College</li>
                <li>Ecological Landscape Design Certificate, Gaia College</li>
                <li>
                  Multi-Department grocery store worker at Planet Organic and
                  Foodland
                </li>
                <li>Soccer Referee</li>
                <li>Brief time at OCAD University and Camosun College</li>
                <li>Honours student throughout highschool</li>
              </ul>
            </div>
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
