import './App.css';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Content from './components/Content/Content.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
