import React, { useEffect, useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext"
import { Link } from "react-router-dom"
function PostItem(post) {
  const { posts, setPosts } = useContext(PostContext)

  const deleteThePost = (e) => {
    e.preventDefault()
    setPosts(posts.filter((item, index) => item.id !== post.id))
  }
  const likePost = () => {
    setPosts(
      posts.map((item) => {
        if (item.id === post.id) {
          return {
            subject: post.subject,
            content: post.content,
            author: post.author,
            tags: post.tags,
            id: post.id,
            rating: !post.rating,
          }
        } else {
          return item
        }
      })
    )
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
          <h3>
            <a onClick={likePost}>{post.rating ? "♥" : "♡"} </a>
          </h3>
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

export default PostItem
