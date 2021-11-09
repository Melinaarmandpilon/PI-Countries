import styles from './App.module.css';
import {Route} from 'react-router-dom';
import {Landing,Home} from './Views/index.js';
import {CountryDetail,AddActivity} from './components/index';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Home/:id" component={CountryDetail}/>
      <Route exact path="/activity" component={AddActivity}/>
      </BrowserRouter>
    </div>
  );
}


