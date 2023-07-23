import React from "react";
import styled from "styled-components";
import useNavbarHooks from "../../hook/navbarHook/useNavbarHooks";

const NavbarComponents = () => {
  const [userName, handelClick, userPhoto] = useNavbarHooks();

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      {!userName ? (
        <LoginButton onClick={handelClick}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="WISHLIST" />
              <span>WISHLIST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="ORIGINAL" />
              <span>ORIGINAL</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} alt={userName} />
            <DropDown>
              <LogOutButton onClick={handelClick}>SignOut</LogOutButton>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  img {
    width: 100%;
    display: block;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginButton = styled.a`
  display: block;
  color: #fff;
  letter-spacing: 1.8px;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #090b13;
    border: 1px solid #090b13;
  }
`;
const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  background: rgb(19, 19, 19);
  opacity: 0;
`;
const SignOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      transition-timing-function: ease-in-out;
    }
  }
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const LogOutButton = styled.button`
  border: none;
  background-color: #202433;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
export default NavbarComponents;
