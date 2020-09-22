import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../contexts/PostContext"

function postDetails({ match }) {
  const { posts } = useContext(PostContext)
  let post = {}
  posts.map((el) => {
    if (el.id === Number(match.params.id)) {
      post = el
    }
  })

  return (
    <div className="row columns">
      <div className="box-header">
        <div className="row">
          <div className="small-3 columns">
            <h1 className="box-title">{post.subject}</h1>
          </div>
          <div className="small-3 columns ">
            <Link to="/" path="/">
              <span className="button secondary"> &lt; back to posts</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="box-content">
        <h2>{post.author}</h2>
        <h3>{post.tags}</h3>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default postDetails
