import React from 'react';
import "./post.css";
const Post = (props) => {
    return (
        <div className = "Post">
            <div className="post-inner">
                <img src="https://inde.io/i/posts/33099/e78d8b0d8f4650e25bee66beb2d19d55.jpg" alt=""/>
                <div className = "postr">
                <span>{props.postMessage}</span>
                <p>Likes: {props.likes}</p>
                </div>
                </div>
        </div>
    );
};
export default Post;