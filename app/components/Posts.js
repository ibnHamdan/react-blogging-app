import React, { useState, useEffect } from "react"
import Post from "./Post"
import PostForm from "./PostForm"
function Posts() {
  const initialPosts = () => JSON.parse(window.localStorage.getItem("Posts")) || ""
  const [posts, setPosts] = useState(initialPosts)

  useEffect(() => {
    window.localStorage.getItem("Posts")
  }, [posts])

  const addPost = (post) => {
    if (posts.length) {
      setPosts([...posts, { subject: post.subject, content: post.content, author: post.author, tags: post.tags, id: Math.random() }])
      window.localStorage.setItem("Posts", JSON.stringify(post))
    } else {
      setPosts([{ subject: post.subject, content: post.content, author: post.author, tags: post.tags, id: Math.random() }])
      window.localStorage.setItem("Posts", JSON.stringify(post))
    }
  }
  const deletePost = (id) => {
    console.log(id)

    setPosts(posts.filter((post, index) => post.id !== id))
  }

  return (
    <div className="row columns">
      <div className="box-header">
        <div className="row">
          <div className="small-3 columns">
            <h1 className="box-title">Posts</h1>
          </div>
          <div className="small-2 columns ">
            <a className="button infor">New Post</a>
          </div>
        </div>
      </div>
      <div className="box-content">
        <ul className="posts-list">
          {posts.length ? (
            posts.map((post, index) => (
              <Post key={index} deletePost={deletePost} subject={post.subject} author={post.author} rating={post.rating} id={post.id} />
            ))
          ) : (
            <p>No Post !!</p>
          )}
        </ul>
      </div>
      <PostForm newPost={addPost} />
    </div>
  )
}

export default Posts
