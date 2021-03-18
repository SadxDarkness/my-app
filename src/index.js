import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  {id: 1, message: "Hi, all ok?", CountLikes: 12},
  {id: 2, message: "First post", CountLikes: 12}
      ];
      let dialogs = [
        {id: 1, name: "Vadim"},
        {id: 2, name: "Alexey"}, 
        {id: 3 , name: "Daniil"},
        {id: 4,name: "Ivan"}
        ];
        let messages = [
        {message: "Hi"},
        {message: "yooo"}, 
        {message: "U ok?"},
        {message: "Privet"}
            ];
ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
