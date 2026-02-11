export const endpoints={
    blogs:{
        list:`/api/v1/blog/display`,
        featured:`/api/v1/blog/featured`,
        latest:`/api/v1/blog/latest/`,
        byCategory: (category) =>
      `/api/v1/blog/blog_search/?tag=${encodeURIComponent(category)}`
    },
    categories:{
        category:`/api/v1/category/display/`
    }
}
export const points=[
    endpoints.blogs.list,
    endpoints.blogs.featured,
    endpoints.blogs.latest,
    endpoints.categories.category
]