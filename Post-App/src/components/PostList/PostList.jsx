import classes from "./postList.module.css";
import Post from "../Post/Post";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    const posts = useLoaderData();

    if(!posts.length)
        return (<div className={classes.posts}>There are no posts yet</div>);

    return(
        <>
            <ul className={classes.posts}>
                { 
                    posts.map(post => {
                        return (
                            <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default PostList;