import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

const START_LOADING_POST = "START_LOADING_POST"

export function startLoadingPost() {
  return {
    type: START_LOADING_POST,
  }
}

export function postFullyFetched(/* TODO */) {
  // TODO
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`)
    ]);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data
      })
    );
  };
}