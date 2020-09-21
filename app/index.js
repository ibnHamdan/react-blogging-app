import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/Layout"
import Posts from "./components/Posts"
import PostForm from "./components/PostForm"
import "./index.css"
import "./foundation.css"
function App() {
  return (
    <Layout>
      <Posts />
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
