import './App.css';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from './components/Dialogs/Dialogs.jsx';
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="container">
        <Menu/>
        <Route path = "/profile" render = {() => <Profile />}/>
        <Route path = "/dialogs" render = {() => <Dialogs posts = {props.posts} dialogs = {props.dialogs} messages = {props.messages}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
