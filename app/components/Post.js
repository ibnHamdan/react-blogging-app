import React, { useEffect, useContext } from "react"
import { PostContext } from "../contexts/PostContext"
import { Link } from "react-router-dom"
function Post(post) {
  const { deletePost } = useContext(PostContext)

  const deleteThePost = (e) => {
    e.preventDefault()
    deletePost(post.id)
  }
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
          <p>rating</p>
        </div>
        <div className="small-2 columns">
          <button onClick={deleteThePost} className="button info expanded">
            delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default Post
