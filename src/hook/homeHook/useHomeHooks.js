import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../feature/movies/movieSlice";
import db from "../../firebase";
import { userNameSelector } from "../../feature/user/userSlice";
const useHomeHooks = () => {
  const dispatch = useDispatch();
  const userName = useSelector(userNameSelector);
  let recommended = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("Hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommended = [...recommended, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommended,
          newDisney: newDisney,
          originals: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return [dispatch];
};

export default useHomeHooks;
