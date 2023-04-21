import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHikesContext } from "../hooks/useHikesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import AddHikeNavbar from "./AddHikeNavbar";

const HikeForm = () => {
  const { dispatch } = useHikesContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [images, setImages] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in!");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rating", rating);
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append(`image`, images[i]);
      }
    }

    const response = await fetch("/api/hikes", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      console.log(json.error);
      setError(json.error);
      console.log(json.error);
      setEmptyFields(json.emptyFields);
      console.log(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setRating("");
      setImages("");
      setError(null);
      setEmptyFields([]);
      console.log("hike added!", json);
      await dispatch({
        type: "CREATE_HIKE",
        payload: json,
      });
      navigate("/");
    }
  };

  return (
    <div>
      <AddHikeNavbar />
      <form className="create" onSubmit={handleSubmit} encType="multi">
        <h1>Add New Hike</h1>
        <label htmlFor="title">Hike Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />
        <label htmlFor="rating">Hike Rating</label>

        <input
          type="number"
          min="1"
          max="5"
          step="0.5"
          id="rating"
          onChange={(e) => setRating(e.target.value)}
          value={Number(rating)}
          className={emptyFields.includes("rating") ? "error" : ""}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={emptyFields.includes("description") ? "error" : ""}
        />
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="image" className="image-label">
          Upload Image(s)
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleFileChange}
          multiple
        />
        <button className="add-hike">Add Hike</button>
      </form>
    </div>
  );
};

export default HikeForm;
