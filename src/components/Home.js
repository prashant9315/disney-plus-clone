import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Views from "./Views";
import Movies from "./Movies";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Views />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
   min-height: calc(100vh - 70px); 
   padding: 0 calc(3.5vw + 5px) ; 
   display:flex;
   flex-direction:column;
   position: relative;
   overflow-x:hidden;
    
   &:before {
      background: url("/images/home-background.png") center center / cover 
      no-repeat fixed;
      content: "";
      position: absolute;
      top: 0; 
      left: 0; 
      right: 0;
      bottom: 0;
      z-index: -1:
    }
`;
