import React from 'react';
import styled from 'styled-components';

function Home() {

	let handleGitClick = () => {
		window.open('https://github.com/zubair-akbar');
	};

	let handleLinkedInClick = () => {
		window.open('https://www.linkedin.com/in/zubair-akbar-engineer/');
	};

  return (
    <HomeWrapper>

      <p
      style={{fontSize: "20px"}}
      >Currently in Development...</p>
      <br />In the mean time, check out my Github or reach out via LinkedIn

      <ButtonWrap>
      <Button
      onClick={handleGitClick}>
      View on Github
    </Button>
    <Button
      onClick={handleLinkedInClick}>
      My LinkedIn Profile
    </Button>
    </ButtonWrap>
    </HomeWrapper>
  )
}


export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #E6E6E6;
  padding: 10px;
  text-align: center;
  font-family: 'Proxima';
  height: 95%;
  font-size: 15px
`;

const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
`;

const Button = styled.button`
  border: 2px solid rgba(255,255,255,0.20);
  border-radius: 61px;
  font-size: 15px;
  color: #FFFFFF;
  background-color: transparent;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 25px;
  display: inline-block;
  margin-right: 15px;
  transition:all 1.2s ease-in-out;
  &:hover {
    text-shadow:
    0 0 10px rgba(255,255,255, 1),
    0 0 50px rgba(255, 255, 255, .8),
    0 0 75px rgba(255, 255, 255, .6),
    0 0 76px rgba(255, 255, 255, .4),
    0 0 77px rgba(255, 255, 255, .5),
    0 0 78px rgba(255, 255, 255, .4),
    0 0 79px rgba(255, 255, 255, .3),
    0 0 80px rgba(255, 255, 255, .2),
    0 0 85px rgba(255, 255, 255, .1);
  }
  `;

/* <h1
      style={{fontFamily: "arial"}}
      >
        Zubair
        <br/>Akbar
      </h1> */