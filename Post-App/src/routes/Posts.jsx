import { Outlet } from "react-router-dom";
import PostList from "../components/PostList/PostList";

function Posts() {

  return <>
    <main>
      <Outlet />
      <PostList/>
    </main>
  </> ;
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const jsonData = await response.json();
  return(jsonData.posts);
}
