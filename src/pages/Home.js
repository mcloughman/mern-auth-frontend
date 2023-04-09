import { useEffect } from "react";
import HikeDetails from "../components/HikeDetails";
import HikeForm from "../components/HikeForm";
import { useHikesContext } from "../hooks/useHikesContext";

const Home = () => {
  const { hikes, dispatch } = useHikesContext();
  useEffect(() => {
    // we can't make useeEffect async, so we create an async function inside it and then call it
    const fetchHikes = async () => {
      const response = await fetch("/api/hikes");
      const json = await response.json();
      if (response.ok) {
        dispatch({
          type: "SET_HIKES",
          payload: json,
        });
      }
    };
    fetchHikes();
  }, [dispatch]);
  return (
    <div className="home">
      {/* <HikeForm /> */}
      <div className="hikes">
        {hikes &&
          hikes.map((hike) => {
            return <HikeDetails key={hike._id} hike={hike} />;
          })}
      </div>
    </div>
  );
};

export default Home;
