import { useParams } from "react-router-dom";

import { useHikesContext } from "../hooks/useHikesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import HikeImages from "./HikeImages";
const SingleHike = () => {
  const { hikes } = useHikesContext();
  const { user } = useAuthContext();
  const { id } = useParams();
  console.log(user);

  let hike = hikes.filter((h) => h._id === id);
  hike = hike[0];
  return (
    <div className="single-container">
      <h1>
        {hike.title} <span>{hike.rating}</span>
      </h1>
      <p>{hike.description}</p>
      {/* <div className="single-images">
        <img
          src={hike.images[1].url}
          style={{ width: "400px", maxHeight: "400px" }}
        />
        <img
          src={hike.images[2].url}
          style={{ width: "400px", maxHeight: "400px" }}
        />
        <img
          src={hike.images[3].url}
          style={{ width: "400px", maxHeight: "400px" }}
        />
        <img
          src={hike.images[0].url}
          style={{ width: "400px", maxHeight: "400px" }}
        /> */}
      <HikeImages hike={hike.images} />
      {/* </div> */}
    </div>
  );
};

export default SingleHike;
