import { useHikesContext } from "../hooks/useHikesContext";
import { BiTrash } from "react-icons/bi";

const HikeDetails = ({ hike }) => {
  const { dispatch } = useHikesContext();

  const deleteHike = async (e) => {
    const response = await fetch("/api/hikes/" + hike._id, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      dispatch({
        type: "DELETE_HIKE",
        payload: json,
      });
    }
  };

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
      <span className="delete-span" onClick={deleteHike}>
        <BiTrash />
      </span>
    </div>
  );
};

export default HikeDetails;
