import rich from "./rich.jpg";

const HikeDetails = ({ hike }) => {
  return (
    <div className="hike-details">
      <h2>{hike.title}</h2>
      {hike.images && (
        <img
          src={hike.images[0]?.url}
          alt="beautiful scenery"
          className="home-image"
        />
      )}
      <p>{hike.description}</p>
      <p>Rating: {hike.rating}</p>
      <p>{hike.createdAt}</p>
    </div>
  );
};

export default HikeDetails;
