import axios from "axios"

const POSTS_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

const FETCHED_5_POSTS = "FETCHED_5_POSTS"
const POSTS_LOADING = "POSTS_LOADING"

export function fetched5Posts(posts){
    return {
        type: FETCHED_5_POSTS,
        payload: posts
    }
}

export function postsLoading(){
    return {
        type: POSTS_LOADING,
    }
}

export async function fetch5MorePosts(dispatch, getState){
    try{
        const response = await axios.get(`${POSTS_URL}?offset=${getState().feed.posts.length}&limit=5`)
        dispatch(fetched5Posts(response.data.rows))

    } catch(error){
        console.log(error.message)
    }
}