import React, { useEffect } from "react"

function Post(props) {
  return (
    <li className="post">
      <div className="row">
        <div className="small-6 columns">
          <h2 className="post-title">{props.subject}</h2>
        </div>
        <div className="small-2 columns">
          <p>{props.author}</p>
        </div>
        <div className="small-2 columns">
          <p>rating</p>
        </div>
        <div className="small-2 columns">
          <button className="button info expanded">edit</button>
        </div>
      </div>
    </li>
  )
}

export default Post
