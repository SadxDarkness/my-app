import React from 'react';
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
const MyPosts = (props) => {
            let postsElement = props.posts.map (p => <Post postMessage = {p.message} likes = {p.CountLikes}/>)
    return (
        <div className = "MyPosts">
            <div>
                 <h3>My post</h3>
                    <div>
                        <textarea name="NewPost" id="newPost" cols="70" rows="10"></textarea>
                        <div>
                        <button>Add Post</button>
                        </div>
                    </div>
                        {postsElement}
            </div>
        </div>
    );
};
export default MyPosts;