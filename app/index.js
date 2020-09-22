import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PostContextProvider from "./contexts/PostContext"
import Layout from "./components/Layout"
import Posts from "./components/Posts"
import PostForm from "./components/PostForm"
import postDetails from "./components/postDetails"
import "./index.css"
import "./foundation.css"

function App() {
  return (
    <Layout>
      <PostContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Posts}></Route>
            <Route path="/newPost" component={PostForm}></Route>
            <Route path="/postDetails/:id" component={postDetails}></Route>
          </Switch>
        </BrowserRouter>
      </PostContextProvider>
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
