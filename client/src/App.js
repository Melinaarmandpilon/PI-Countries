import './App.css';
import {Route} from 'react-router-dom';
import {Landing,Home} from './Views/index.js';
import {CountryDetail,AddActivity} from './components/index';



export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Home/:id" component={CountryDetail}/>
      <Route exact path="/activity" component={AddActivity}/>
    </div>
  );
}


