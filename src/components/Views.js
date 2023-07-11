import React from "react";
import styled from "styled-components";

function Views() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
}

export default Views;

const Container = styled.div`
  //position: relative;
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  position:relative;
  padding-top:53.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow:hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    inset:0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity:1;
    z-index:1500;
    display:block;
    border-radius: 10px;
    position:absolute;
    top:0;
  }

  video {
    width:100%;
    height 100%;
    opacity:0;
    z-index:0;
    object-fit: cover;
    display:block;
    border-radius: 7px;
    position:absolute;
    top:0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb (0 0 0 / 72%) Opx 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video{
      opacity:1;
      z-index:2000;
      
    }
  }
`;
