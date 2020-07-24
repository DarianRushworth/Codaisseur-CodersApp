import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import moment from "moment";
import { selectPosts, isLoading } from "../store/posts/selector"
import { useSelector, useDispatch } from "react-redux"
import { fetch5MorePosts } from "../store/posts/actions"


export default function PostsFeed() {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  // console.log("posts test", posts)
  const loading = useSelector(isLoading)
  // console.log("loading test", loading)


  useEffect(() => {
  dispatch(fetch5MorePosts)
  }, [dispatch])

  function fetchMore(){
    dispatch(fetch5MorePosts)
  }
 
  
  const whatToDisplay = !loading
                                ? posts.map(post => {
                                    return (
                                        <div key={post.id}>
                                        <Link to={`/post/${post.id}`}>
                                        <h3>{post.title}</h3>
                                        </Link>
                                          <p className="meta">
                                        {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
                                          <span className="tags">
                                        {post.tags.map(tag => {
                                          return (
                                            <React.Fragment key={tag.id}>
                                            <span className="Tag">{tag.tag}</span>{" "}
                                            </React.Fragment>
                                              )
                                        })}
                                          </span>
                                          </p>
                                        </div>
                                      )})
                                : <h1>Loading...</h1>
                                
  
  return(
    <div className="Postsfeed">
      <h2>Posts page</h2>
      {whatToDisplay}
      <button onClick={fetchMore}>More Posts Please</button>
    </div>
  )
}
