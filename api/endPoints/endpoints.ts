import { sign, verify } from "crypto"

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
    },

    auth:{
        signUp:`/api/v1/auth/register/`,
        otp:`/api/v1/auth/register/verify-otp/`,
        signIn:`/api/v1/auth/login/`,
        verifyLogin:`/api/v1/auth/login/verify-otp/`,
        profile:`/api/v1/auth/profile/`

    },
    bookmark:{
        add:`/api/v1/bookmark/add/`,
        list:`/api/v1/bookmark/all/`,
        remove:`/api/v1/bookmark/remove/`
    },
    newsLetter:{
        subscribe:`/api/v1/subscribe/subscribe_blog/`
    }

}
export const points=[
    endpoints.blogs.list,
    endpoints.blogs.featured,
    endpoints.blogs.latest,
    endpoints.categories.category,
    endpoints.auth.signUp,
    endpoints.auth.otp,
    endpoints.auth.signIn,
    endpoints.auth.verifyLogin,
    endpoints.bookmark.add,
    endpoints.bookmark.list,
    endpoints.newsLetter.subscribe,
    endpoints.auth.profile,
    endpoints.bookmark.remove
]