const HikeImages = (props) => {
  console.log(props);
  const styles = {
    width: "400px",
  };
  const { hike: images } = props;
  console.log(images);
  const photos = images.map((el) => {
    return <img src={el.url} style={styles} alt="Hello" />;
  });
  return <div className="photos">{photos}</div>;
};

export default HikeImages;
