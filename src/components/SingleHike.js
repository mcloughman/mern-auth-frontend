import { useParams } from "react-router-dom";
import { useHikesContext } from "../hooks/useHikesContext";
import HikeImages from "./HikeImages";
import Navbar from "./Navbar";

const SingleHike = () => {
  const { hikes } = useHikesContext();

  const { id } = useParams();

  let hike = hikes.filter((h) => h._id === id);
  hike = hike[0];

  return (
    <div>
      <Navbar />

      <div className="single-container">
        <h1>
          {hike.title}{" "}
          <span className="rating-span">Rating: {hike.rating}/5</span>
          <p className="hike-description">{hike.description}</p>
        </h1>
        <div className="single-images-container">
          <HikeImages hike={hike.images} />
        </div>
      </div>
    </div>
  );
};
export default SingleHike;
