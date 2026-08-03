import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "React", published: true },
    { id: 2, title: "Redux Toolkit", published: false },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;