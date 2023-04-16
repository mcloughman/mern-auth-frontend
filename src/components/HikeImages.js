import { useNavigation } from "react-router-dom";
import { useEffect } from "react";

const HikeImages = (props) => {
  console.log(props);

  const { hike: images } = props;
  console.log(images);
  const photos = images.map((el) => {
    return <img src={el.url} alt="Hello" className="single-img" />;
  });
  return <div className="photos">{photos}</div>;
};

export default HikeImages;
