import React, { createContext, useState, useEffect } from "react"

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const initialPosts = () => JSON.parse(window.localStorage.getItem("Posts")) || ""
  const [posts, setPosts] = useState(initialPosts)
  console.log(posts, posts.length)
  useEffect(() => {
    window.localStorage.setItem("Posts", JSON.stringify(posts))
    window.localStorage.getItem("Posts")
  }, [posts])

  const addPost = (post) => {
    if (posts.length) {
      setPosts([...posts, { subject: post.subject, content: post.content, author: post.author, tags: post.tags, id: Math.random() }])
      //window.localStorage.setItem("Posts", JSON.stringify(post))
    } else {
      setPosts([{ subject: post.subject, content: post.content, author: post.author, tags: post.tags, id: Math.random() }])
      //window.localStorage.setItem("Posts", JSON.stringify(post))
    }
  }
  const deletePost = (id) => {
    console.log(id)
    setPosts(posts.filter((post, index) => post.id !== id))
  }

  return <PostContext.Provider value={{ posts, addPost, deletePost }}>{props.children}</PostContext.Provider>
}

export default PostContextProvider
