import { memo, useMemo } from "react";

const PostList = memo(function PostList({
  posts,
  onDelete,
}) {
  const sortedPosts = useMemo(() => {
    return [...posts].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [posts]);

  if (sortedPosts.length === 0) {
    return (
      <div className="empty-state">
        No scheduled posts yet.
      </div>
    );
  }

  return (
    <div className="post-list">
      {sortedPosts.map((post) => (
        <div className="post-item" key={post.id}>
          <div
            className="platform-dot"
            style={{ backgroundColor: post.color }}
          />

          <div className="post-info">
            <h3>{post.title}</h3>

            <p>{post.platform}</p>

            <span>
              {new Date(post.date).toLocaleString()}
            </span>
          </div>

          <button
            className="delete-button"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
});

export default PostList;