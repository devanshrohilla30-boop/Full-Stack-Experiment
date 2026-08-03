import { createSelector } from "@reduxjs/toolkit";

const selectPosts = (state) => state.posts.posts;

export const selectPublishedPosts = createSelector(
  [selectPosts],
  (posts) => posts.filter((post) => post.published)
);