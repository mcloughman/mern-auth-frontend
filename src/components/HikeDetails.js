import { useState } from "react";
import { useHikesContext } from "../hooks/useHikesContext";
import { BiTrash } from "react-icons/bi";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const HikeDetails = ({ hike }) => {
  const [isError, setIsError] = useState(null);
  const { dispatch } = useHikesContext();
  const { user } = useAuthContext();

  const deleteHike = async (e) => {
    if (!user) {
      setIsError("You are not authorized!");
      return;
    }
    const response = await fetch("/api/hikes/" + hike._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(response);
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
      <p>{hike.description.substring(0, 20)}...</p>
      <p>Rating: {hike.rating}</p>
      <p className="created-at">
        {formatDistanceToNow(new Date(hike.createdAt))} ago
      </p>
      <span className="delete-span" onClick={deleteHike}>
        <BiTrash />
      </span>
      {isError && <div className="error">{isError}</div>}
    </div>
  );
};

export default HikeDetails;
