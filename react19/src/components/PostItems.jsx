import {use, suspense, Suspense} from "react"

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json()
}


const PostItems = () => {
 const posts = use(fetchPosts());

 return <div>
  <ul>
   {posts.map((post) => (
    <li key={post.id}>{post.title}</li>
   ))}
  </ul>
  </div>
}

const Posts = () => {
 //to tell when posts are ready to be used
 return (
   <Suspense fallback="Loading Posts">
     <PostItems />;
   </Suspense>
 )
}
export default Posts;
