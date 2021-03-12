import React from 'react';
import Post from "../MyPosts/Posts/Post";
import "./content.css";
import MyPosts from '../MyPosts/MyPosts';
const Content = () => {
    return (
        <div className = "content">
                <div><img src="https://enjoy-the-netherlands.ru/images/paginas/1522400342_kinderdijk-04-1400x300.jpg" alt=""/></div>
                <div>
                    ava + opisanie
                </div>
                <MyPosts/>
                <Post />
        </div>
        
    );
};
export default Content;