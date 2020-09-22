import React, { useEffect } from "react"

function Post(props) {
  const deleteThePost = (e) => {
    e.preventDefault()
    props.deletePost(props.id)
  }
  return (
    <li className="post">
      <div className="row">
        <div className="small-6 columns">
          <h2 className="post-title">
            <a>{props.subject}</a>
          </h2>
        </div>
        <div className="small-2 columns">
          <p>{props.author}</p>
        </div>
        <div className="small-2 columns">
          <p>rating</p>
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

export default Post
