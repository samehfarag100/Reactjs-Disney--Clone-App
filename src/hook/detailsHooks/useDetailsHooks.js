import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { useParams } from "react-router-dom";

const useDetailsHooks = () => {
  const [movieDetailsData, setMovieDetailsData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovieDetailsData(doc.data());
        } else {
          console.log("no such document in firebase 🚀");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return [movieDetailsData];
};

export default useDetailsHooks;
