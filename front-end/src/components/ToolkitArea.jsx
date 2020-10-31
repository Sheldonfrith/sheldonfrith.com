import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';
import {GlobalContext} from './providers/GlobalContext';
import {Search } from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  margin: 1rem auto 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const ToolkitTitle = styled.h1`
  transform: rotate(90deg);
  position: absolute;
  top: 11.5%;
  font-size: 12vw;
  left: 60vw;
  color: ${(props) => props.theme.white};
`;
const ToolkitSearchbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  background-color: ${(props) => props.theme.orange};
  border-radius: 0.3rem;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding: 0.2rem;
`;
const ToolkitSearchbarText = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3rem;
  color: ${(props) => props.theme.black};
  padding: 0.2rem;
  width: 62vw;
`;
const ToolkitSearchbarIcon = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ToolkitTextArea = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 70vw;
  margin: 0 1.5rem;
  top: 18%;
`;
const MainSpecialties = styled.p`
  color: ${(props) => props.theme.orange};
  margin: 0 1rem;
  padding: 0.8rem;
  font-size: 1rem;
`;
const SubSpecialties = styled.div`
  color: ${(props) => props.theme.white};
  border-style: solid;
  border-color: ${(props) => props.theme.grey};
  margin: 1rem;
  font-size: 2.2vh;
`;

export default function ToolkitArea({theme}) {
const globalContext = useContext(GlobalContext);


return (
<Container>
          <ToolkitTitle>TOOLKIT</ToolkitTitle>
          <ToolkitSearchbar>
            <ToolkitSearchbarText>
              I specialize in full stack web development...
            </ToolkitSearchbarText>
            <ToolkitSearchbarIcon>
              <Search style={{ color: theme.orange }} />
            </ToolkitSearchbarIcon>
          </ToolkitSearchbar>
          <ToolkitTextArea>
            <MainSpecialties>
              ...using <b>React</b>, <b>Typescript/Javascript</b>,  and <b>PHP with Laravel</b>. I have
              experience with other technologies and languages including:
            </MainSpecialties>
            <SubSpecialties>
              <ul>
                {globalContext.subSpecialties.map((text, index) => (
                  <li key={"subSpecialty" + index}>{text}</li>
                ))}
              </ul>
            </SubSpecialties>
          </ToolkitTextArea>
        </Container>
);
}
