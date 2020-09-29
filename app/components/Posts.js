import React, { useContext } from "react"
import { PostContext } from "../contexts/PostContext"
import PostItem from "./PostItem"
import { Link } from "react-router-dom"

function Posts() {
  const { posts } = useContext(PostContext)
  console.log(posts)
  return (
    <div className="row columns">
      <div className="box-header">
        <div className="row">
          <div className="small-3 columns">
            <h1 className="box-title">Posts</h1>
          </div>
          <div className="small-2 columns ">
            <Link to="/newPost">
              <span className="button infor">New Post</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="box-content">
        <ul className="posts-list">
          {posts.length ? (
            posts.map((post) => <PostItem key={post.id} subject={post.subject} author={post.author} rating={post.rating} id={post.id} />)
          ) : (
            <p>No Posts !!</p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Posts
