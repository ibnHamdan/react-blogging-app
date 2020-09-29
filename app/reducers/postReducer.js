export const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          subject: action.post.subject,
          content: action.post.content,
          author: action.post.author,
          tags: action.post.tags,
          rating: undefined,
          id: Math.random(),
        },
      ]
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id)
    case "LIKE_POST":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            subject: post.subject,
            content: post.content,
            author: post.author,
            tags: post.tags,
            rating: !post.rating,
            id: Math.random(),
          }
        } else {
          return post
        }
      })

    default:
      return state
  }
}
