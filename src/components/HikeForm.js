import { useState } from "react";

const HikeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [images, setImages] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rating", rating);
    for (let i = 0; i < images.length; i++) {
      formData.append(`image`, images[i]);
    }

    const response = await fetch("/api/hikes", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(response);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setRating("");
      setImages("");
      setError(null);
      console.log("workout added!", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit} encType="multi">
      <h3>Add New Hike</h3>
      <label htmlFor="title">Hike Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="rating">Hike Rating</label>
      <input
        type="number"
        min="1"
        max="10"
        step="0.5"
        id="rating"
        onChange={(e) => setRating(Number(e.target.value))}
        value={Number(rating)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input type="file" name="image" onChange={handleFileChange} multiple />
      <button>Add Hike</button>
      <br />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default HikeForm;
