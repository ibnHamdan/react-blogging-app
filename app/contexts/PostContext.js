import React, { createContext, useState, useEffect } from "react"

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const initialPosts = () => JSON.parse(window.localStorage.getItem("Posts")) || []
  const [posts, setPosts] = useState(initialPosts)
  useEffect(() => {
    window.localStorage.setItem("Posts", JSON.stringify(posts))
    //window.localStorage.getItem("Posts")
  }, [posts])

  return <PostContext.Provider value={{ posts, setPosts }}>{props.children}</PostContext.Provider>
}

export default PostContextProvider
