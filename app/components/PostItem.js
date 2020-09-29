import React, { useEffect, useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext"
import { Link } from "react-router-dom"
function PostItem(post) {
  const { posts, dispatch } = useContext(PostContext)

  return (
    <li className="post">
      <div className="row">
        <div className="small-6 columns">
          <h2 className="post-title">
            <Link to={`postDetails/${post.id}`}>{post.subject}</Link>
          </h2>
        </div>
        <div className="small-2 columns">
          <p>{post.author}</p>
        </div>
        <div className="small-2 columns">
          <h3>
            <a onClick={() => dispatch({ type: "LIKE_POST", id: post.id })}>{post.rating ? "♥" : "♡"} </a>
          </h3>
        </div>
        <div className="small-2 columns">
          <button onClick={() => dispatch({ type: "REMOVE_POST", id: post.id })} className="button info expanded">
            delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default PostItem
