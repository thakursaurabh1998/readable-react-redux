import { getCookie } from "./cookies";

// const api = "https://fast-brushlands-76580.herokuapp.com";
const api = "http://localhost:3000";

const headers = {
  Accept: "application/json",
  "x-auth": getCookie("x-auth")
};

const uuid = () => Math.floor(Math.random() * Math.pow(10, 10)).toString();

// returns array of categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());

// returns array of posts
export const getPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

export const getPostsById = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

// returns array of comments
export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(res => res.json());

export const getCommentById = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers }).then(res => res.json());

export const post = (title, body, author, category) =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: uuid(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category
    })
  }).then(res => res.json());

export const upVotePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "upVote" })
  }).then(res => res.json());

export const downVotePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "downVote" })
  }).then(res => res.json());

export const comment = (body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: uuid(),
      timestamp: Date.now(),
      body,
      author,
      parentId
    })
  }).then(res => res.json());

export const upVoteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "upVote" })
  }).then(res => res.json());

export const downVoteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: "downVote" })
  }).then(res => res.json());

export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      body
    })
  }).then(res => res.json());

export const editComment = (id, body) =>
  fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      timestamp: Date.now(),
      body
    })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
