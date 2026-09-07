import { useCallback, useMemo, useState } from "react";
import Calendar from "./components/Calendar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

const initialPosts = [
  {
    id: "1",
    title: "New Product Launch",
    platform: "Instagram",
    date: "2026-09-10T10:00:00",
    color: "#e1306c",
  },
  {
    id: "2",
    title: "Company Update",
    platform: "LinkedIn",
    date: "2026-09-12T14:00:00",
    color: "#0a66c2",
  },
  {
    id: "3",
    title: "Weekend Promotion",
    platform: "Facebook",
    date: "2026-09-15T16:00:00",
    color: "#1877f2",
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [message, setMessage] = useState("");

  const totalPosts = useMemo(() => {
    return posts.length;
  }, [posts]);

  const addPost = useCallback((newPost) => {
    setPosts((currentPosts) => [...currentPosts, newPost]);
    setMessage("Post scheduled successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }, []);

  const deletePost = useCallback((id) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id)
    );
  }, []);

  const handleEventChange = useCallback((info) => {
    const newDate = info.event.start?.toISOString();

    if (!newDate) {
      return;
    }

    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === info.event.id
          ? {
            ...post,
            date: newDate,
          }
          : post
      )
    );
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Social Media Scheduler</h1>
          <p>
            Schedule, manage and optimize your social media posts
          </p>
        </div>

        <div className="post-count">
          <strong>{totalPosts}</strong>
          <span>Scheduled Posts</span>
        </div>
      </header>

      {message && <div className="success-message">{message}</div>}

      <main className="container">
        <section className="card">
          <h2>Create New Post</h2>

          <PostForm onAddPost={addPost} />
        </section>

        <section className="card">
          <div className="section-heading">
            <div>
              <h2>Content Calendar</h2>
              <p>Drag and drop posts to change their schedule.</p>
            </div>
          </div>

          <Calendar
            posts={posts}
            onEventChange={handleEventChange}
          />
        </section>

        <section className="card">
          <div className="section-heading">
            <div>
              <h2>Scheduled Posts</h2>
              <p>Manage all your scheduled content.</p>
            </div>
          </div>

          <PostList
            posts={posts}
            onDelete={deletePost}
          />
        </section>

        <section className="performance-card">
          <h2>Performance Optimization</h2>

          <div className="optimization-grid">
            <div>
              <h3>React.memo</h3>
              <p>
                Prevents unnecessary re-rendering of Calendar and
                PostList components.
              </p>
            </div>

            <div>
              <h3>useMemo</h3>
              <p>
                Memoizes calculated values such as sorted posts and
                total post count.
              </p>
            </div>

            <div>
              <h3>useCallback</h3>
              <p>
                Keeps event handler references stable between renders.
              </p>
            </div>

            <div>
              <h3>Testing</h3>
              <p>
                Vitest is used to test adding, deleting, sorting and
                updating posts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        Interactive Calendar Scheduler • React Performance Experiment
      </footer>
    </div>
  );
}

export default App;