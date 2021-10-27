import './App.css';
import {Route} from 'react-router-dom';
import {Landing,Home} from './Views/index.js';


export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path="/Home" component={Home}/>
    </div>
  );
}


