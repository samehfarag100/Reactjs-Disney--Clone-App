import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSliderCimponents from "../slider/ImageSliderCimponents";
import ViewerComponents from "../viwerImage/ViewerComponents";
import RecommendedComponents from "../recommended/RecommendedComponents";
import NewDisneyComponents from "../recommended/NewDisneyComponents";
import OriginalsComponents from "../recommended/OriginalsComponents";
import TrendingComponents from "../recommended/TrendingComponents";
import useHomeHooks from "../../hook/homeHook/useHomeHooks";

const HomeComponents = () => {
  const [dispatch] = useHomeHooks();

  return (
    <Container>
      <ImageSliderCimponents />
      <ViewerComponents />
      <RecommendedComponents />
      <NewDisneyComponents />
      <OriginalsComponents />
      <TrendingComponents />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  top: 75px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default HomeComponents;
