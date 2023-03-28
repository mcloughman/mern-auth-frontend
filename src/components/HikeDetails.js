import rich from "./rich.jpg";

const HikeDetails = ({ hike }) => {
  return (
    <div className="hike-details">
      <h2>{hike.title}</h2>
      <img src={rich} alt="hike" className="hikePhoto" />
      <p>{hike.description}</p>
      <p>Rating: {hike.rating}</p>
      <p>{hike.createdAt}</p>
    </div>
  );
};

export default HikeDetails;
