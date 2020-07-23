import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./PostFeed.css"

const postsUrl = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: []
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });
    const response = await axios.get(`${postsUrl}?offset=${data.posts.length}&limit=5`)
    // console.log("response test", response.data.rows)
    // console.log("what is my data so far", data)
    const morePosts = response.data.rows

    setData({
      loading: false,
      posts: [...data.posts, ...morePosts]
    });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  console.log("outside the function test", data)
  const displayPosts = () => {
    if(!data.loading){
      return data.posts.map(post => {
      return (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p className="meta">
            {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
          </p>
          <span className="tags">
            {post.tags.map(tag => {
              return (
                <React.Fragment key={tag.id}>
                  <span className="Tag">{tag.tag}</span>
                </React.Fragment>
              )
            })}
          </span>
        </div>
      )
    })
    } else {
      return <h1>Loading...</h1>
    }
  }


  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {displayPosts()}
    </div>
  );
}