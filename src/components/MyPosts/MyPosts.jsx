import React from 'react';
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
const MyPosts = () => {
    return (
        <div className = "MyPosts">
            <div>
                 My post
                    <div>
                        <textarea name="NewPost" id="newPost" cols="30" rows="10"></textarea>
                        <button>Add Post</button>
                    </div>
                    <Post message = "Hi, all ok?"/>
                    <Post message = "First post"/>
            </div>
        </div>
    );
};
export default MyPosts;