import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeWrapper>
      <h1
      style={{fontFamily: "arial"}}
      >
        Zubair
        <br/>Akbar
      </h1>
      <p
      style={{fontSize: "20px"}}
      >Currently in Development...</p>
    </HomeWrapper>
  )
}


export default Home;

const HomeWrapper = styled.div`
  display: flex;

  flex-direction: column;

  color: #E6E6E6;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-family: 'Proxima';
  height: 95%;
  font-size: 15px
`;