import React, { useEffect, useRef, useState } from "react";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  userNameSelector,
  photoSelector,
  emailSelector,
  setUserLoginDetails,
  setUserLogoutState,
} from "../../feature/user/userSlice";
import { useNavigate } from "react-router-dom";
const useNavbarHooks = () => {
  const dispatch = useDispatch();
  const userName = useSelector(userNameSelector);
  const emailUser = useSelector(emailSelector);
  const userPhoto = useSelector(photoSelector);
  const navigate = useNavigate();

  // To Check User Login or Not

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  // Login Function
  const handelClick = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setUserLogoutState());
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };
  // Store User Info in Redux
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return [userName, handelClick, userPhoto];
};

export default useNavbarHooks;
