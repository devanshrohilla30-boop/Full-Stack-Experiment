import { useState } from "react";

const platforms = [
  {
    name: "Instagram",
    color: "#e1306c",
  },
  {
    name: "Facebook",
    color: "#1877f2",
  },
  {
    name: "LinkedIn",
    color: "#0a66c2",
  },
  {
    name: "Twitter",
    color: "#1da1f2",
  },
];

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [date, setDate] = useState("2026-09-20");
  const [time, setTime] = useState("10:00");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a post title.");
      return;
    }

    if (!date || !time) {
      alert("Please select date and time.");
      return;
    }

    const selectedPlatform = platforms.find(
      (item) => item.name === platform
    );

    const newPost = {
      id: Date.now().toString(),
      title: title.trim(),
      platform,
      date: `${date}T${time}:00`,
      color: selectedPlatform.color,
    };

    onAddPost(newPost);

    setTitle("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Post Title</label>

        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Platform</label>

        <select
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        >
          {platforms.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Time</label>

          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="primary-button">
        + Schedule Post
      </button>
    </form>
  );
}

export default PostForm;