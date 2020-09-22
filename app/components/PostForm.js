import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

function PostForm({ newPost }) {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState("")

  const history = useHistory("")

  const handleSubmit = (e) => {
    e.preventDefault()
    newPost({ subject, content, author, tags })
    history.push("/")
  }

  return (
    <div className="row column">
      <div className="box-header">
        <h1 className="box-title">New Post</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <label htmlFor="">Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

        <label htmlFor="">Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor="">Tags</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        <input type="submit" value="Publish" className="button info" />
      </form>
    </div>
  )
}

export default PostForm
