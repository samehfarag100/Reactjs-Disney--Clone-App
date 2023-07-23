import React from "react";
import styled from "styled-components";

const ViewerComponents = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video autoPlay loop muted src="/videos/1564674844-disney.mp4" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video autoPlay loop muted src="/videos/1564676115-marvel.mp4" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video
          autoPlay
          loop
          muted
          src="/videos/1564676296-national-geographic.mp4"
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video autoPlay loop muted src="/videos/1564676714-pixar.mp4" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video autoPlay loop muted src="/videos/1608229455-star-wars.mp4" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 15px;
  gap: 25px;
  padding: 30px 0 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 55.25%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    opacity: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
export default ViewerComponents;
