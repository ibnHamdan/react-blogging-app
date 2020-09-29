import React, { createContext, useEffect, useReducer } from "react"
import { postReducer } from "../reducers/postReducer"

export const PostContext = createContext()

const PostContextProvider = (props) => {
  const [posts, dispatch] = useReducer(postReducer, [], () => {
    const localData = localStorage.getItem("Posts")
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    window.localStorage.setItem("Posts", JSON.stringify(posts))
  }, [posts])

  return <PostContext.Provider value={{ posts, dispatch }}>{props.children}</PostContext.Provider>
}

export default PostContextProvider
