import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "./features/postsSlice";
import { selectPublishedPosts } from "./features/selectors";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const publishedPosts = useSelector(selectPublishedPosts);

  const handleAdd = () => {
    dispatch(
      addPost({
        id: Date.now(),
        title: "New Post",
        published: Math.random() > 0.5,
      })
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Redux Toolkit Demo</h1>

      <button onClick={handleAdd}>Add Post</button>

      <h2>All Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          {post.title}{" "}
          <button onClick={() => dispatch(deletePost(post.id))}>
            Delete
          </button>
        </div>
      ))}

      <hr />

      <h2>Published Posts (Memoized Selector)</h2>

      {publishedPosts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;