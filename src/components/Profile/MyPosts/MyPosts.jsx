import React from 'react';
import "./MyPosts.css";
import Post from "./Posts/Post.jsx";
const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, all ok?", CountLikes: 12},
        {id: 2, message: "First post", CountLikes: 12}
            ];
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
                    <Post postMessage = {postData[0].message} likes = {postData[0].CountLikes}/>
                    <Post postMessage = {postData[1].message} likes = {postData[1].CountLikes}/>
            </div>
        </div>
    );
};
export default MyPosts;