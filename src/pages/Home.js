import { useEffect, useState } from "react";
import HikeDetails from "../components/HikeDetails";

const Home = () => {
  const [hikes, setHikes] = useState([]);
  useEffect(() => {
    // we can't make useeEffect async, so we create an async function inside it and then call it
    const fetchHikes = async () => {
      const response = await fetch("/api/hikes");
      const json = await response.json();
      if (response.ok) {
        setHikes(json);
      }
    };
    fetchHikes();
  }, []);
  return (
    <div className="home">
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
