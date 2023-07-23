import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";
const LoginComponents = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.png" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <CATDescription>
            Get Primer Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 13/26/21, the price
            of Disney+ and The Disney Bundle will increase by $1.
          </CATDescription>
          <CATLogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BackgroundImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 80px 40px;
  height: 100%;
`;
const BackgroundImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
  text-align: center;
  margin-bottom: 2vw;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-in-out;
  transition: opacity 1s;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  background-color: #136ad5;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  padding: 20px 0;
  width: 100%;
  transition: all 0.5s ease-in-out;
  letter-spacing: 1.5px;
  border: 2px solid transparent;
  :hover {
    background-color: #037ef3;
    transform: scale(1.01);
  }
`;

const CATDescription = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CATLogoTwo = styled.img`
  margin-bottom: 12px;
  vertical-align: bottom;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
export default LoginComponents;
