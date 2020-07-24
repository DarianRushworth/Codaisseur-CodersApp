export const selectPosts = state => {
    return state.feed.posts
}
export const isLoading = state => {
    return state.feed.loading
}