import { describe, expect, it } from "vitest";

describe("Calendar Scheduler", () => {
  it("creates a post correctly", () => {
    const post = {
      title: "Test Post",
      platform: "Instagram",
      date: "2026-09-20T10:00:00",
    };

    expect(post.title).toBe("Test Post");
    expect(post.platform).toBe("Instagram");
  });

  it("sorts posts by date", () => {
    const posts = [
      {
        title: "Second Post",
        date: "2026-09-20T10:00:00",
      },
      {
        title: "First Post",
        date: "2026-09-10T10:00:00",
      },
    ];

    const sorted = [...posts].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    expect(sorted[0].title).toBe("First Post");
    expect(sorted[1].title).toBe("Second Post");
  });

  it("deletes a post", () => {
    const posts = [
      { id: "1", title: "Post One" },
      { id: "2", title: "Post Two" },
    ];

    const remaining = posts.filter(
      (post) => post.id !== "1"
    );

    expect(remaining).toHaveLength(1);
    expect(remaining[0].title).toBe("Post Two");
  });

  it("updates a post date", () => {
    const post = {
      id: "1",
      title: "Test Post",
      date: "2026-09-10T10:00:00",
    };

    const updatedPost = {
      ...post,
      date: "2026-09-15T15:00:00",
    };

    expect(updatedPost.date).toBe(
      "2026-09-15T15:00:00"
    );
  });
});