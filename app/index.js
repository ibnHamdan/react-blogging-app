import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/Layout"
import Posts from "./components/Posts"
import PostForm from "./components/PostForm"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./index.css"
import "./foundation.css"
function App() {
  return (
    // <Layout>
    //   <Router>
    //     <Switch>
    //       <Route path="/" exact component={Posts}></Route>
    //       <Route path="/newPost" exact component={PostForm}></Route>
    //     </Switch>
    //   </Router>
    // </Layout>
    <Layout>
      <Posts />
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
