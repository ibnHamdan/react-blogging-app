import React from "react"

function Layout(props) {
  return (
    <div className="layout">
      <div className="top-bar">
        <div className="top-bar-left">
          <h2>React Demo</h2>
        </div>
        {/* <div className="top-bar-right">
          <a className="button info">New Post</a>
        </div> */}
      </div>
      <div className="row">
        <div className="large-8 large-centered columns">{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
